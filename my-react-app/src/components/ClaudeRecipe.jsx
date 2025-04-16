import React from "react";
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'

function ClaudeRecipe(props) {
  return (
    <div>
      <section>
        <ReactMarkdown>
          {props.recipe}
        </ReactMarkdown>
        
         </section>
    </div>
  );
}

export default ClaudeRecipe;
