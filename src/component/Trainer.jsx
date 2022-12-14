import React from "react";
import Card from "../ui/Card";

const Trainer = ({ image, name, job, socials }) => {
  return (
    <Card className="trainer">
      <div className="trainer__img">
        <img src={image} alt={`Mr ${name}`} />
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer__socials">
          {socials.map(({ icon, link }, index) => {
            return (
              <a
                key="index"
                href={link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default Trainer;
