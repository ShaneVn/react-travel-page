import React from "react";
import Button from "../button/Button";
import "./HeroSection.css";
import "../../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/bay.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for? Travel to the USA!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Trailer <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
