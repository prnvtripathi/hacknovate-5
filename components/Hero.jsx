import localFont from 'next/font/local'
import Link from 'next/link'
import { Anton } from 'next/font/google'
import { FaDiscord } from "react-icons/fa6"
import { motion } from 'framer-motion'

const pricedown = localFont({
    src: './../assets/fonts/pricedown.ttf',
})

const anton = Anton({
    subsets: ['latin'],
    weight: ["400"],
})

export default function Hero() {
    return (
        <>
            <div className={`bg-[url(/hero.jpg)] bg-cover bg-center md:bg-cover bg-no-repeat h-screen flex justify-center items-center`}>
                {/* <div className='fixed -z-99 w-screen h-screen'>
                <iframe frameborder="0" height="100%" width="100%"
                    src="https://youtube.com/embed/cd-myPLMXbU?autoplay=1&showinfo=0&autohide=1&controls=0&start=18&mute=1" allowfullscreen referrerPolicy="strict-origin-when-cross-origin">
                </iframe>
            </div> */}
                <div className='bg-gradient-to-t from-black to-transparent md:bg-gradient-to-r md:from-black md:to-transparent h-screen w-screen flex items-center justify-center'>
                    <div className='text-white flex w-full md:w-11/12 flex-col gap-6 items-center md:items-start'>
                        <div className='flex flex-col'>
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5}}
                                className={`${pricedown.className} text-5xl md:text-8xl`}>
                                Hacknovate 5
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.8}}
                                className='text-lg md:text-2xl'>
                                aajao saare
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.3 }}
                            className={`flex flex-col md:flex-row gap-2 md:gap-x-8 w-11/12 ${anton.className}`}>
                            <Link href='/'>
                                <button className='bg-transparent w-full outline outline-1 py-3 px-7 rounded hover:bg-white hover:text-black transition-colors'>
                                    PRE REGISTER
                                </button>
                            </Link>
                            <Link href='/'>
                                <button className='bg-transparent w-full outline outline-1 py-3 px-7 rounded hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2'>
                                    <span className='text-xl'><FaDiscord /></span>
                                    JOIN DISCORD
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div >
        </>
    )
}