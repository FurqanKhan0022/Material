/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/projects/1.png",
      gLink: "https://poki.com",
      lLink: "https://web.whatsapp.com/",
    },
    {
      title: "Project 2",
      img: "/projects/2.png",
      gLink: "https://poki.com",
      lLink: "https://web.whatsapp.com/",
    },
    {
      title: "Project 3",
      img: "/projects/3.png",
      gLink: "https://poki.com",
      lLink: "https://web.whatsapp.com/",
    },
    {
      title: "Project 4",
      img: "/projects/4.png",
      gLink: "https://poki.com",
      lLink: "https://web.whatsapp.com/",
    },
    {
      title: "Project 5",
      img: "/projects/5.png",
      gLink: "https://poki.com",
      lLink: "https://web.whatsapp.com/",
    },
    {
      title: "Project 6",
      img: "/projects/6.png",
      gLink: "https://poki.com",
      lLink: "https://web.whatsapp.com/",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          {/* <a
            href="https://images.search.yahoo.com/search/images;_ylt=AwrEa5jUgXhk1Uc0N4yJzbkF;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDOTYwNjI4NTcEX3IDMgRmcgNtY2FmZWUEZnIyA3A6cyx2OmksbTpzYi10b3AEZ3ByaWQDVmpUdm5lcExTZDYyem40ZXZTNXQxQQRuX3JzbHQDMARuX3N1Z2cDMARvcmlnaW4DaW1hZ2VzLnNlYXJjaC55YWhvby5jb20EcG9zAzAEcHFzdHIDBHBxc3RybAMwBHFzdHJsAzIwBHF1ZXJ5A2Jhc3QlMjBwcm9qZWN0JTIwd2Vic2l0ZQR0X3N0bXADMTY4NTYxOTY0Mg--?p=bast+project+website&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&ei=UTF-8&x=wrt&type=E210US91215G91765#id=11&iurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F1rsuxwVD98I%2Fmaxresdefault.jpg&action=click"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a> */}

<button className="animated-button btn" target="_blank" rel="noreferrer"> View All</button>

        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                ea nobis aut deserunt. Reprehenderit numquam harum facilis
                beatae praesentium pariatur eligendi non. Explicabo, cupiditate
                odit vero quo iste numquam obcaecati.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;