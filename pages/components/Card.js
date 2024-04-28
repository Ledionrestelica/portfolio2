"use client";
import aliusImg from "../../public/alius.png";
import { motion, useScroll, stagger } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Card({ src, name }) {
  return (
    <>
      <div className="p-2 cursor-pointer border border-black dark:border-white rounded-3xl min-h-[500px] flex flex-col">
        <div className="relative max-h-full w-full h-full flex-1">
          <Image
            className="rounded-2xl object-cover invert dark:filter-none"
            src={src}
            alt={name}
            fill
          />
        </div>
        <div className="text-3xl font-medium font-mono px-4 py-6 flex justify-between items-end">
          <div>{name}</div>
          <div className="text-lg">
            <Link href="/alius">SEE MORE</Link>
          </div>
        </div>
      </div>
    </>
  );
}
