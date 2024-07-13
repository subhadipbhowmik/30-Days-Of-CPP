import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import preloaderAnimation from "./Preloader.json";
import "./Preloader.css";

const Preloader = () => {
  const [fadeIn, setFadeIn] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      setFadeIn(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${fadeIn ? "fade-in" : "fade-out"}`}>
      <Lottie className="preloader-animation" animationData={preloaderAnimation} />
    </div>
  );
};

export default Preloader;
