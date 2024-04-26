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
        initial={{ opacity: 0, scale: 0.5, x: -400 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, type: { spring } }}
        className="w-full px-4 max-w-[1440px] flex flex-col lg:mx-auto"
      >
        <p className="text-6xl px-2 py-20 w-full md:text-6xl lg:text-8xl">
          Hello I am Ledion Restelica, a frontend developer based in Prishtina
        </p>
        <div className="px-4 gap-6 flex flex-row flex-wrap">
          <a
            className="hover:scale-110 transition-all ease-in-out"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:scale-110 transition-all ease-in-out"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="hover:scale-110 transition-all ease-in-out"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="hover:scale-110 transition-all ease-in-out"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:scale-110 transition-all ease-in-out"
            href="https://www.example.com/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>

          <div onClick={copyEmailToClipboard}>
            <button
              className="hover:scale-110 transition-all ease-in-out"
              onClick={notify}
            >
              Email
            </button>
            <ToastContainer stacked theme={theme} />
          </div>
        </div>
        <div className="px-4 pt-32 h-screen">
          <p className="text-3xl font-normal md:text-4xl lg:text-6xl mb-16">
            Selected Work
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card src="/alius.png" name="Alius" />
            <Card src="/munthes.png" name="Munthes" />
            <Card src="/estatex.svg" name="EstateX" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
