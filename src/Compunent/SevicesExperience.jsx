import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "Cpp",
      desc: "Cpp use to start stap  loramd  nsn nd  webb  set diod   of programing.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Html/Css ",
      desc: "Html/Css it is use for website html is work for create body css  style of a body.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Js/React",
      desc: "Js is use of function of body react is a fream of work of js.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn" >Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3 className="animated-text">6</h3>
            <p className="animated-text">Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4 className="animated-text">10+</h4>
              <p className="animated-text">Clients</p>
            </div>
            <div className="portfolio">
              <h4 className="animated-text">06</h4>
              <p className="animated-text">Years Experience</p>
            </div>
            <div className="portfolio">
              <h4 className="animated-text">10+</h4>
              <p className="animated-text">Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4 className="animated-text">6</h4>
              <p className="animated-text"> Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;