import React from "react";
import { useState, useEffect } from "react";
import Video from "../../Video/Mountain.mp4";
import {
  Nav,
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroBtnContainer,
} from "./HeroElements";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "../ButtonElement";
import "./index.css";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const [delayed, setDelayed] = useState(false);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelayed(true);
    }, 3500);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 6000);
  },[]);
  const onHover = () => {
    setHover(!hover);
  };
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <TypeAnimation
            cursor={false}
            sequence={["Welcome to my portfolio"]}
            speed={250}
          />
        </HeroH1>
        
        {delayed? <HeroP><TypeAnimation
            cursor={true}
            sequence={["My name is Thananjaya Sharma Dinesh, but I go by Thanush"]}
            speed={175}
          /></HeroP>: <HeroP></HeroP>}
        
      </HeroContent>
      <HeroBtnContainer>
          <HeroBtnWrapper>
          {showButton ? 
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="button-link"
            >
              More about me
            </Link>: null}
          </HeroBtnWrapper>
        </HeroBtnContainer>
    </HeroContainer>
  );
};

export default Hero;
