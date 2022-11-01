import React from "react";
import "./trainer.css";
import Header from "../../component/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Trainer from "../../component/Trainer";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        soluta ipsa eaque libero quod facilis?
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, name, image, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[{ icon: <BsInstagram />, link: socials[0] },
              {icon : <AiOutlineTwitter /> , link : socials[1]},
            {icon : <FaFacebookF />  , link : socials[2]},{
              icon : <FaLinkedinIn /> , link : socials[3]
            },
            ]}
              ></Trainer>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
