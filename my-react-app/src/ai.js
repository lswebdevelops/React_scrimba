import Anthropic from "@anthropic-ai/sdk"
// import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
Você é um assistente que recebe uma lista de ingredientes que um usuário possui e sugere uma receita que ele poderia fazer com alguns ou todos esses ingredientes. Você não precisa usar todos os ingredientes que eles mencionarem na receita. A receita pode incluir ingredientes adicionais que eles não mencionaram, mas tente não incluir muitos ingredientes extras. Formate sua resposta em markdown para facilitar a renderização em uma página da web.`

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

// const anthropic = new Anthropic({
//     // Make sure you set an environment variable in Scrimba 
//     // for ANTHROPIC_API_KEY
//     apiKey: process.env.ANTHROPIC_API_KEY,

//     dangerouslyAllowBrowser: true,
// })

// new way
const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
});

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}

// Make sure you set an environment variable in Scrimba 
// for HF_ACCESS_TOKEN
// const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)


// export async function getRecipeFromMistral(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ")
//     try {
//         const response = await hf.chatCompletion({
//             model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
//             messages: [
//                 { role: "system", content: SYSTEM_PROMPT },
//                 { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//             ],
//             max_tokens: 1024,
//         })
//         return response.choices[0].message.content
//     } catch (err) {
//         console.error("API Error:", err.message)
//         return "Sorry, there was an error connecting to the recipe API. Please try again later."
//     }
// }
