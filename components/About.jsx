import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
// import AboutImg from "@/assets/images/aboutSide.png";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
})

const pricedown = localFont({
  src: './../assets/fonts/pricedown.ttf',
})

const About = () => {
  return (
    <div
      className={`text-6xl bg-[url(/about.png)] bg-cover md:bg-cover bg-no-repeat h-screen flex justify-center items-center w-full`}
    >
      <div className="md:w-1/3">
        <div className="hidden md:block">
          <img src="x" alt="err" width={600} height={600} />
        </div>
      </div>

      <div className="flex flex-col w-full md:w-2/3 px-5 text-left">
        <h2 className={`${pricedown.className} text-5xl md:text-7xl`}>
          What is Hacknovate 5?
        </h2>

        <div className={`text-base flex flex-col gap-5 py-4 ${roboto.className}`}>
          <span>
            After the triumphant success of four consecutive years of
            Hacknovate, ABES Institute of Technology proudly presents the
            much-anticipated HACKNOVATE 5.0!
          </span>

          <span>
            Hacknovate 5.0 aims to bring together the most brilliant
            programmers, engineers, architects, designers, and business
            visionaries for another extraordinary event. Our primary objective
            is to foster an environment where the sharpest minds collaborate to
            conceive the most innovative solutions.
          </span>

          <span>
            Building upon the achievements of its predecessors, Hacknovate 5.0
            will continue to be a nexus of creativity, pushing the boundaries of
            what is possible in the realms of technology and innovation. In
            recognition of the changing times, the Hybrid Mode of Hacknovate 5.0
            will be implemented, opening doors for passionate young minds who
            are unable to join us in person
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
