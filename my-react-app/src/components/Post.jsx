import React from "react";
import DataTravel from "../data/data_travel.js";

const Post = () => {

  const dataTravel = DataTravel.map((data, index) => {
    return (
      <div key={index} className="container-main">
      <section className="image-section">
        <img src={data.img.src} alt={data.img.alt} />
      </section>
      <main className="main-text">
        <div className="div-text-main">
          <p>📍</p>
          <h2>{data.country}</h2>
          <a target="_blank" rel="noreferrer" href={data.googleMapsLink}>
            View in Google Maps
          </a>
        </div>
        <div className="div-text-main-bottom">
          <h3>{data.title}</h3>
          <p>
            <strong>
              {data.dates}
            </strong>
          </p>
          <p>{data.text}</p>
        </div>
      </main>
    </div>
    )
  })

  return (
    <div>{dataTravel}</div>
  );
};

export default Post;
