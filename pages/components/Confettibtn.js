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
    duration: 4000,
    stagger: 3,
    width: "20px",
    height: "20px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <div className="cursor-pointer" onClick={handleConfetti}>
      <h1 className="flex justify-center items-center gap-4">
        {content}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </span>
      </h1>
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
