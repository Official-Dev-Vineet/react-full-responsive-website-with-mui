import React from "react";
import "./about.css";
import Header from "../../component/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
        dolorem amet natus sed adipisci quos quidem quas accusamus voluptate
        assumenda.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="our story image" />
          </div>
          <div className="about__section-content">
            <h1>Our story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              vero perferendis voluptatem unde exercitationem doloremque, a
              officia provident qui possimus sit similique porro ratione omnis?
              Incidunt eius deleniti illum officia!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, inventore vero asperiores voluptatem tenetur rem quas,
              eveniet quis fugiat suscipit molestiae aperiam ut, ipsa
              laudantium!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nisi quasi sequi cum excepturi autem?
            </p>
          </div>
        </div>
      </section>
      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              vero perferendis voluptatem unde exercitationem doloremque, a
              officia provident qui possimus sit similique porro ratione omnis?
              Incidunt eius deleniti illum officia!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, inventore vero asperiores voluptatem tenetur rem quas,
              eveniet quis fugiat suscipit molestiae aperiam ut, ipsa
              laudantium!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nisi quasi sequi cum excepturi autem?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="our vision image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="our mission image" />
          </div>
          <div className="about__section-content">
            <h1>Our mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              vero perferendis voluptatem unde exercitationem doloremque, a
              officia provident qui possimus sit similique porro ratione omnis?
              Incidunt eius deleniti illum officia!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, inventore vero asperiores voluptatem tenetur rem quas,
              eveniet quis fugiat suscipit molestiae aperiam ut, ipsa
              laudantium!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nisi quasi sequi cum excepturi autem?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
