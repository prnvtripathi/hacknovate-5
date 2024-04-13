import { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { Anton } from "next/font/google";
import { motion } from "framer-motion";
import CountdownTimer from "./Countdown";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa6";

const pricedown = localFont({
  src: "./../assets/fonts/pricedown.ttf",
});

const anton = Anton({
  subsets: ["latin-ext"],
  weight: ["400"],
});

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={`bg-[url(/hero.jpg)] bg-cover bg-center md:bg-cover bg-no-repeat h-screen flex justify-center items-center transition-all`}
      >
        <div className="bg-gradient-to-t from-black to-transparent md:bg-gradient-to-r md:from-black md:to-transparent h-screen w-screen flex flex-col md:flex-row items-center justify-evenly">
          <div className="text-white flex flex-col gap-6 items-center md:items-start">
            <div className="flex flex-col text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mx-auto mb-3 md:mb-2 md:mx-0"
              >
                <h2 className={`text-lg md:text-3xl ${anton.className}`}>
                  ABES{" "}
                  <span className="text-lg md:text-2xl">
                    Institute of Technology
                  </span>
                </h2>
                <p className={`${anton.className} text-center`}>PRESENTS</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Image
                  src="/logo.png"
                  width={500}
                  height={10}
                  className="px-1"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className={`text-lg md:text-2xl text-center md:text-left ${anton.className}`}
              >
                Code like a pro, Hack like a heist
              </motion.p>
              {/* <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                className={`text-lg md:text-2xl text-center md:text-left ${anton.className}`}>
                                10-11th May 2024
                            </motion.p> */}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              className={`flex flex-col md:flex-row gap-2 md:gap-x-8 w-11/12 ${anton.className}`}
            >
              <Link
                href="https://hacknovate5.devfolio.co/"
                className="outline outline-1 rounded"
              >
                <Image
                  src={isHovered ? "/devfoliodark.png" : "/devfoliowhite.png"}
                  alt="register"
                  className="bg-transparent w-full h-12 object-contain py-3 px-7 hover:bg-white transition-all"
                  width={170}
                  height={25}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </Link>
              <Link href="https://discord.gg/kaGJwHqW8t">
                <button className="bg-transparent w-full outline outline-1 py-3 px-7 rounded hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                  <span className="text-xl">
                    <FaDiscord />
                  </span>
                  JOIN DISCORD
                </button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.9 }}
            className="bg-black bg-opacity-30 backdrop-blur-lg p-4 rounded-lg"
          >
            <CountdownTimer />
          </motion.div>
        </div> <div className="absolute bottom-10 right-10 md:flex hidden flex-col gap-2">
            <div className={`text-xl ${anton.className}`}>
                Follow Us
            </div>
            
            <div className="flex gap-7">
                <Link href="https://twitter.com/hacknovate" target="_blank">
                    <FaTwitter className="" size={25} />
                </Link>
                <Link href="https://www.linkedin.com/company/hacknovate/about/" target="_blank">
                    <FaLinkedin className=""  size={25} />
                </Link>
                <Link href="https://discord.gg/aHSFWKjb" target="_blank">
                    <FaDiscord className=""  size={25} />
                </Link>
                <Link href="https://www.instagram.com/hacknovate.abesit/" target="_blank">
                    <FaInstagram className=""  size={25} />
                </Link>
            </div>
        </div>
      </motion.div>
     
    </>
  );
}
