import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import AboutImg from "@/public/AboutIMG.png";
import { Roboto } from "next/font/google";
import Heading from "./Heading";
import { IoIosStats } from "react-icons/io";
import { CiTrophy } from "react-icons/ci";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Anton } from 'next/font/google'
import { AiOutlineTeam } from "react-icons/ai";



const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

const anton = Anton({
    subsets: ['latin-ext'],
    weight: ["400"],
})

const pricedown = localFont({
    src: "./../assets/fonts/pricedown.ttf",
});

const ABESIT = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`text-6xl bg-[url(/aboutBG.jpg)] bg-cover md:bg-cover bg-no-repeat flex flex-col justify-center items-center w-full py-20 gap-10`}
            id="about"
        >
            <div className="flex flex-row-reverse">
                <div className="md:w-1/3">
                    <div className="hidden md:block rounded-lg">
                        <Image src="/newAbes.webp" alt="ABESIT" height={700} width={500}  className="p-3 h-80 mt-20 rounded-lg "/>
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-2/3 px-5 text-left">
                    <Heading>About ABESIT</Heading>

                    <div
                        className={`text-base text-center md:text-left flex flex-col gap-5 py-4 ${roboto.className}`}
                    >
                        <span>
                            ABES Institute of Technology (ABESIT), (AKTU College Code 290), a self-financed institute embarked on its mission in the field of Technical Education in the year 2007. It is situated on a prominent location at NE-3, Crossings Republik, Ghaziabad. It is approved by AICTE, New Delhi and affiliated to Dr. APJ Abdul Kalam Technical University, Lucknow, Uttar Pradesh. Presently we have the following undergraduate programs in B. Tech. - CSE, IT, CSE (AI), CSE (Data Science), & CSE (IoT), B. Pharma and post graduate program in MCA. It's B.Tech. - CSE and IT are NBA accredited branches.
                        </span>

                        <span>
                            Teaching learning atmosphere in the campus has shown its impact on overall performance of the students in Smart India Hackathon consistently with consolation prize in 2017, three runner-up Teams in 2018, one Team Winner each in 2019 and 2020, two Team winners in 2022 and three Team winners in 2023. ABESITs' Institutions Innovation Council (IIC), established under the direction and norms of Innovation Cell, Ministry of Education, Govt. of India, which is consistently performing well. In 2022, the Institute has set up an AI based Centre of Excellence in association with NVIDIA for students and faculty where they'll be provided exposure to industry standards with high-quality in a competitive and challenging environment. This is the first-of-its-kind Centre of Excellence established in any private institute in affiliating university of Dr. APJ Abdul Kalam Technical University, Lucknow, and NCR Region.
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ABESIT;
