"use client";
import { Inter } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";
import Card from "./components/Card";
import { motion, spring } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const notify = () => toast("Email copied!");
  const { theme } = useTheme();

  const projects = [
    { name: "Munthes", picture: "/alius.png" },
    { name: "Alius", picture: "/munthes.png" },
  ];

  const copyEmailToClipboard = () => {
    const email = "ledionrestelica7@gmail.com";
    navigator.clipboard.writeText(email);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0.2, scale: 0.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "ease in", delay: 0.2 }}
        className="w-full px-4 max-w-[1440px] flex flex-col lg:mx-auto"
      >
        <p className="text-[12vw] xxl:text-[200px] px-2 py-20 w-full font-medium leading-tight font-mono">
          I'm Ledion Portfolio/24
        </p>
        <div className="flex justify-between my-[10px] md:my-[100px]">
          <div className="flex-1 py-10 font-medium text-lg md:text-3xl lg:text-6xl font-mono">
            Frontend Developer
          </div>
          <div className="flex-1 py-10 text-right font-medium text-lg md:text-3xl lg:text-6xl font-mono">
            Based in Prishtina<br></br>{" "}
            <span className="text-lg md:text-3xl lg:text-6xl">
              LAST UPDATE-2024
            </span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0.2, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "ease", delay: 0.3 }}
          className="px-4 pt-32 h-screen"
        >
          <p className="text-4xl font-normal text-center md:text-6xl lg:text-7xl mb-20">
            Selected Work
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card src="/alius.png" name="Alius" />
            <Card src="/munthes.png" name="Munthes" />
            <Card src="/estatex.svg" name="EstateX" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
