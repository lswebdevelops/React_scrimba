import { useState, useEffect } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  const changeImage = () => {
    const oneMeme = allMemes.map((data) => data.url);
    let randomNumber = Math.floor(Math.random() * oneMeme.length);
    let randomMeme = oneMeme[randomNumber];

    setMeme((prevState) => ({
      ...prevState,
      imageUrl: randomMeme,
    }));
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())

      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleEvent = (event) => {
    const { value, name } = event.currentTarget;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleEvent}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleEvent}
            value={meme.bottomText}
          />
        </label>
        <button onClick={changeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
