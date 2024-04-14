import Link from "next/link";
import { TeamData } from "@/data/team";
import { Anton } from "next/font/google";
import localFont from 'next/font/local'
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

const pricedown = localFont({
    src: './../assets/fonts/pricedown.ttf',
})

const anton = Anton({
    subsets: ["latin-ext"],
    weight: ["400"],
});

const TeamPage = () => {
    return (
        <div>
            <section className="w-full mx-auto">
                <div className="grid md:grid-cols-3">
                    {TeamData.map((member, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: index * 0.1 }}
                            viewport={{ "once": true }}
                            key={index}
                            className="flex flex-col items-center justify-around p-1 md:p-3 m-1 w-full text-center transition ease-in-out duration-200"
                        >
                            <div className="relative overflow-hidden transition duration-300 transform p-5">
                                <img
                                    src={member.img}
                                    alt="member"
                                    className="object-cover w-60 rounded outline outline-1"
                                    width={1000}
                                    height={1000}
                                />
                                <div className="absolute inset-0 flex justify-center items-center px-5 py-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                                    <Link href={member.linkedin} target="_blank" className="text-white hover:text-blue-600 text-4xl">
                                        <FaLinkedin />
                                    </Link>
                                </div>
                            </div>
                            <h3 className={`text-2xl tracking-widest text-gray-300 ${anton.className}`}>{member.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default TeamPage;