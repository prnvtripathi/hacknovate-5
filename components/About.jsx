import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import AboutImg from '@/public/AboutIMG.png'
import { Roboto } from 'next/font/google';
import Heading from "./Heading";
import { motion } from 'framer-motion'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
})

const pricedown = localFont({
  src: './../assets/fonts/pricedown.ttf',
})

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100}}
      whileInView={{ opacity: 1, x: 0}}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5}}
      className={`text-6xl bg-[url(/aboutBG.jpg)] bg-cover md:bg-cover bg-no-repeat flex justify-center items-center w-full py-20`}
    >
      <div className="md:w-1/3">
        <div className="hidden md:block">
          {/* Img to be changed with some techy image */}
          <Image src={AboutImg} alt="About Image" height={600} />
        </div>
      </div>

      <div className="flex flex-col w-full md:w-2/3 px-5 text-left">
        <Heading>
          What is Hacknovate 5?
        </Heading>

        <div className={`text-base flex flex-col gap-5 py-4 ${roboto.className}`}>
          <span>
          Hacknovate 5.0 will gather brightest programmers, engineers, architects, designers, and business visionaries. Our goal is to create a space where the brightest minds may collaborate to develop the most creative solutions. The Hybrid Mode of Hacknovate 5.0 will pave the way for passionate youngsters who can't join us in the offline mode.

          </span>

          <span>
          Hacknovate 5.0 aims to bring together the most brilliant programmers, engineers, architects, designers, and business visionaries for another extraordinary event. Our primary objective is to foster an environment where the sharpest minds collaborate to conceive the most innovative solutions.
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
