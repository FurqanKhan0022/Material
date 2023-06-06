// import React from "react";
import React, { useState } from 'react';
function Banner() {
  const [showPopup, setShowPopup] = useState(false);
  
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/mylogo2.jpeg"className="animated-image"  alt="" id="umar"/>
          </div>
          <div className="banner-content">
            <h2 className="animated-text">Hello, I'm Furqan Shah</h2>
            <h3 className="animated-text">Web Developer</h3>
            <p className="animated-text" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              magni possimus in architecto repellat perspiciatis cum recusandae
              adipisci culpa voluptatem dolorem laudantium temporibus quos
              laborum, beatae sint delectus expedita quo.
            </p>
            {/* <a className="btn" href="#projects">

              About Me
            </a> */}

{/* <button className="animated-button btn">About Me</button> */}


<div>
      <button className="popup-button btn animated-button" onClick={togglePopup}>
      About Me
      </button>

      {showPopup && (
        <div className="popup ">
          <h2>About Me</h2>
          <p className='texty'> I Am  Web Developer</p>
          <button className="close-button" onClick={togglePopup}>
          <p className='texty'>This is for use popup button</p>
          </button>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;