"use client";
import React from "react";
import Confetti from "react-dom-confetti";
import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { Content } from "next/font/google";

const Confettibtn = ({ content }) => {
  const { width, height } = useWindowSize;
  const [isConfettiActive, setConfetti] = useState(false);

  function handleConfetti() {
    setConfetti(true);

    setTimeout(() => {
      setConfetti(false);
    }, 2000);
  }

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 2000,
    stagger: 3,
    width: "20px",
    height: "20px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <div className="cursor-pointer" onClick={handleConfetti}>
      <h1>{content}</h1>
      <Confetti
        config={config}
        active={isConfettiActive}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Confettibtn;
