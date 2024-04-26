"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Confettibtn from "./Confettibtn";

const Navigation = () => {
  const [isHydrating, setHydrationStatus] = useState(true);

  useEffect(() => {
    setHydrationStatus(false);
  }, []);

  if (isHydrating) {
    return <></>;
  }

  return (
    <div className="w-full flex justify-between px-12  mx-auto h-44  bg-transparent relative">
      <div className="text-4xl flex-1 items-center flex">
        <Button />
      </div>
      <div className="flex justify-around items-center text-md gap-6">
        <div className="text-4xl font-medium font-mono">
          <a href="mailto:ledionrestelica7@gmail.com">
            <Confettibtn content="EMAIL ME"></Confettibtn>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
