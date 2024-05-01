import Carousel from 'better-react-carousel';
import Image from 'next/image';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { Anton } from "next/font/google";
import Heading from './Heading';
import { motion } from 'framer-motion';

const anton = Anton({
    subsets: ["latin-ext"],
    weight: ["400"],
});

const Themes = () => {
    const ThemesArray = [
        {
            name: 'AR-VR',
            url: '/themes/1.webp',
        },
        {
            name: 'AI & Machine Learning',
            url: '/themes/2.webp',
        },
        {
            name: 'Cyber Security',
            url: '/themes/3.webp',
        },
        {
            name: 'Web3 & Blockchain',
            url: '/themes/4.webp',
        },
        {
            name: 'Open Innovation',
            url: '/themes/5.webp',
        },
    ];
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-11/12 mx-auto  py-12">
            <Heading>Themes</Heading>
            <Carousel
                cols={5}
                rows={1}
                gap={10}
                autoPlay={10000}
                loop
                arrowRight={
                    <FaCircleChevronRight
                        size={50}
                        className="absolute flex md:hidden cursor-pointer rounded-full bg-black text-2xl text-white md:-top-14 md:right-10 z-10 md:-translate-y-1/2"
                    />
                }
                arrowLeft={
                    <FaCircleChevronLeft
                        size={50}
                        className="absolute flex md:hidden cursor-pointer rounded-full bg-black text-2xl text-white md:-top-14 md:right-32 z-10 md:-translate-y-1/2"
                    />
                }
                responsiveLayout={[
                    {
                        breakpoint: 1400,
                        cols: 5,
                        gap: 5,
                    },
                    {
                        breakpoint: 768,
                        cols: 1,
                        gap: 2,
                    },
                ]}
            >
                {ThemesArray.map((item) => {
                    return (
                        <Carousel.Item key={item.url}>
                            <div className="w-[95%] max-sm:w-[100%] max-xsm:w-[85%] relative">
                                <Image
                                    className="rounded-xl object-cover w-11/12 h-80"
                                    width={500}
                                    height={400}
                                    src={item.url}
                                    alt={item.name}
                                />
                                <p className={`text-white text-2xl px-4 absolute bottom-6 text-wrap ${anton.className} md:text-4xl`}>
                                    {item.name}
                                </p>
                            </div>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </motion.div>
    );
};

export default Themes;
