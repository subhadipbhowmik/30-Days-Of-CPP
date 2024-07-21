import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { animateScroll } from 'react-scroll';
import "./BackToTop.css"; 

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleClick = () => {
      animateScroll.scrollToTop({
        top: 0,
        behavior: "smooth",
        duration: 500
      });
    };
  
    return (
      <button
        className={`back-to-top ${showButton ? "show" : ""}`}
        onClick={handleClick}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    );
  };
  
export default BackToTop;