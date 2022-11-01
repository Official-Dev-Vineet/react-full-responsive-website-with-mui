import React from "react";
import "./gallery.css";
import Header from "../../component/Header";
import HeaderImage from "../../images/header_bg_3.jpg";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];
  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
        adipisci mollitia, saepe iste reprehenderit atque error
      </Header>
      <section className="gallery">
        <section className="container gallery__container">
          {
            images.map((image,index)=>{
              return (<article key={index}>
                <img src={image} alt={`gallery image ${index + 1}`} />
              </article>)
            })
          }
        </section>
      </section>
    </>
  );
};

export default Gallery;
