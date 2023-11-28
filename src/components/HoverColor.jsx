import React, { useEffect, useRef } from "react";
import "./css/hoverColor.css";

const HoverColor = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    /*     const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"]; */
    const colors = ["#00CDD1", "#09E8DE", "#00FFEF", "#F4308F", "#E0007C"];
    const SQUARES = 500;

    const setColor = (element) => {
      const color = getRandomColor();
      element.style.background = color;
      element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    };

    const removeColor = (element) => {
      element.style.background = "#1d1d1d";
      element.style.boxShadow = "0 0 2px #000";
    };

    const getRandomColor = () => {
      return colors[Math.floor(Math.random() * colors.length)];
    };

    for (let i = 0; i < SQUARES; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseover", () => setColor(square));

      square.addEventListener("mouseout", () => removeColor(square));

      container.appendChild(square);
    }
  }, []); // Empty dependency array ensures that the code runs only once when the component mounts - aha!

  return <div className="container" ref={containerRef}></div>;
};

export default HoverColor;
