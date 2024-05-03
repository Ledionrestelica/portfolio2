"use client";
import { Inter } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";
import Card from "./components/Card";
import { motion, spring, stagger } from "framer-motion";

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
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "ease in" }}
        className="w-full px-4  flex flex-col lg:mx-auto"
      >
        <p className="text-[12vw] xxl:text-[200px] px-2 py-20 w-full font-medium leading-tight font-mono">
          Im Ledion Portfolio/24
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
        <div className="px-4 pt-32 m min-h-screen flex flex-col justify-center items-center">
          <p className="text-4xl font-normal text-center md:text-6xl lg:text-7xl mb-20">
            Selected Work
          </p>
          <div className="grid w-full grid-cols-1 grid-rows-3 md:grid-rows-2 lg:grid-cols-2 gap-8">
            <Card src="/alius.png" name="Alius" />
            <Card src="/munthes.png" name="Munthes" />
            <Card src="/estatex.svg" name="EstateX" />
          </div>
        </div>
        <div className="flex w-full flex-col gap-14 py-24 px-4">
          <div className="text-4xl">Experience</div>
          <div className="flex flex-col items-start gap-2 py-6 rounded-lg cursor-pointer">
            <div className="text-2xl">
              Frontend developer
              <a
                className="border-b border-black dark:border-white"
                href="https://alius.se"
              >
                @Alius
              </a>
              - Current
            </div>
            <div className="mb-4">June 2023 - Ongoing, Remote</div>
            <div className="text-[#bebebe]">
              Developed high-end responsive websitesDeveloped high-end
              responsive websitesDeveloped high-end responsive websitesDeveloped
              high-end responsive websitesDeveloped high-end responsive
              websitesDeveloped high-end responsive websites
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 py-6  rounded-lg cursor-pointer">
            <div className="text-2xl">
              Digital marketing academy
              <a
                className="border-b  border-black dark:border-white"
                href="https://seotactica.com/"
              >
                @Tactica
              </a>
            </div>
            <div className="mb-4">March 2022 - September 2022</div>
            <div className="text-[#bebebe]">
              Completed this academy which was a KODE Projects in collaboration
              with the World Bank, got my first knowledge on digital marketing
              world, includin HTML, SEO methods and graphic design using Adobe
              Illustrator
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 ">
          <div className="text-4xl">Frameworks</div>
          <div className="font-mono text-2xl flex items-center gap-4">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="50"
                width="50"
              >
                <path d="M19.108 12.376q-.176-.201-.371-.403.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571-1.465 1.698-2.057 3.376-1.457 4.415.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95.619-1.075-.02-2.877-1.554-4.63zM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 00-.422 2.678A20.887 20.887 0 005.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179 0 .59.028 1.178zm0 3.94a7.237 7.237 0 01-2.64.094 1.766 1.766 0 01-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 002.107 1.7 20.802 20.802 0 00.426 2.712q-.25.063-.505.114zm7.1-8.039q-.503-.317-1.018-.613-.508-.292-1.027-.563c.593-.249 1.176-.462 1.739-.635a18.218 18.218 0 01.306 1.811zM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 00-2.526.97 20.061 20.061 0 00-2.52-.981q.087-.3.188-.596zm-.4 1.424a18.307 18.307 0 011.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823zm-.317 7.66q.497.319 1.009.613.522.3 1.057.576a18.196 18.196 0 01-1.744.665 19.144 19.144 0 01-.322-1.853zm5.456 3.146a7.236 7.236 0 01-1.238 2.333 1.766 1.766 0 01-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 002.53-1.01 20.8 20.8 0 002.547.979q-.072.249-.155.494zm.362-1.324c-.569-.176-1.16-.393-1.762-.646q.509-.267 1.025-.565.53-.306 1.032-.627a18.152 18.152 0 01-.295 1.838zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854-.79-.455-1.544-.969-.07-.91-.07-1.822 0-.911.068-1.821a24.168 24.168 0 013.158-1.823q.816.397 1.603.851.79.454 1.55.959.065.914.065 1.831zm.956-5.093c1.922-.373 3.37-.122 3.733.507.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 00-2.144-1.688 20.04 20.04 0 00-.405-2.649q.31-.076.608-.135zm-.13 3.885a18.164 18.164 0 011.462 1.188 18.12 18.12 0 01-1.457 1.208q.023-.594.023-1.188 0-.604-.028-1.208zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 00.387-2.682 19.94 19.94 0 002.137-1.715q.177.183.336.364a7.234 7.234 0 011.403 2.238 1.766 1.766 0 01.054 1.403zm-8.819-6.141a1.786 1.786 0 102.44.654 1.786 1.786 0 00-2.44-.654z" />
              </svg>
            </span>
            React.js
          </div>
          <div className="font-mono text-2xl flex items-center gap-4">
            <span>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="50"
                width="50"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M9 15V9l7.745 10.65A9 9 0 1119 17.657M15 12V9" />
              </svg>
            </span>
            Next.js
          </div>
        </div>
        <div className="flex flex-col gap-16 py-16">
          <p className="text-4xl font-mono">Content mangement systems</p>
          <div className="flex items-center gap-4 text-2xl">
            <span>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="50"
                width="50"
              >
                <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" />
              </svg>
            </span>
            Framer
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="50"
                width="50"
              >
                <path d="M7.684 0v8.035h7.775c.28 0 .502.236.502.483v7.802h8.025V.502A.502.502 0 0023.484 0zm-.5.5L.086 7.607a.251.251 0 00.178.428h6.92zm.5 8.035v7.283c0 .278.224.502.502.502h7.275V9.018c0-.278-.224-.482-.502-.483zm8.277 8.285v6.928c0 .224.271.336.43.178l7.095-7.106z" />
              </svg>
            </span>
            Strapi
          </div>
        </div>
        <div className="flex h-[300px] items-center gap-8">
          <p className="text-4xl font-mono mr-14">Contact</p>
          <a
            className="text-2xl font-mono"
            href="https://github.com/ledionrestelica"
          >
            Github
          </a>
          <a
            className="text-2xl font-mono"
            href="https://www.linkedin.com/in/ledionrestelica/"
          >
            Linkedin
          </a>
          <a
            className="text-2xl font-mono"
            href="https://instagram.com/ledionres
          "
          >
            Instagram
          </a>
        </div>
      </motion.div>
    </>
  );
}
