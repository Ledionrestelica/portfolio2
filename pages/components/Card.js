"use client";
import aliusImg from "../../public/alius.png";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

export default function Card({ src, name }) {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        whileHover={{ scale: 0.98 }}
        className="cursor-pointer border border-black dark:border-white rounded-3xl"
      >
        <motion.div className="max-h-full object-cover">
          <Image
            className="rounded-3xl aspect-video object-fill"
            src={src}
            alt={name}
            width={500}
            height={500}
          />
        </motion.div>
        <div className="p-2 py-6 text-2xl font-medium">{name}</div>
      </motion.div>
    </>
  );
}
