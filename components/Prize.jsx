import Heading from './Heading'
import { motion } from 'framer-motion'
import { Anton } from 'next/font/google'
import Link from 'next/link';

const anton = Anton({
  subsets: ["latin-ext"],
  weight: ["400"],
});

const Prizes = () => {
  return (

    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='w-11/12 mx-auto py-12'
      id='prizes'
      >

      <Heading>Prizes</Heading>

      <div className='my-4 flex flex-col sm:flex-row gap-y-6 justify-evenly overflow-y-auto scroll-snap-y-mandatory'>


        <div className="bg-[url(/bg.jpg)] bg-cover h-screen flex items-center justify-center w-full sm:w-2/5 rounded-md border flex-col .bg-50 scroll-snap-start" >


          <img src="/collage.svg" alt="reload" className='flex justify-center align-middle items-center border border-gray-700 rounded-md w-full md:w-3/4 lg:w-1/2' />
          <div>
            <Heading>Hacknovate Offline</Heading>
            <ul className={`my-3 flex flex-col ${anton.className} tracking-widest`}>
              <li className='font-semibold text-2xl'>Winner: ₹25,000 </li>
              <li className='font-semibold text-2xl'>Runner Up: ₹15,000 </li>
            </ul>
          </div>
          
          <Link href='https://hacknovate5.devfolio.co/'>
            <button className={`px-6 py-2 text-sm sm:px-12 sm:py-3 sm:text-base md:px-24 md:py-4 md:text-xl hover:bg-white hover:text-black justify-center font-semibold border border-white m-5 backdrop-blur-sm rounded ${anton.className}`}>Register Now</button>
          </Link>


        </div>

        <div className="bg-[url(/hero.jpg)] bg-cover bg-center h-screen flex items-center justify-center w-full sm:w-2/5 rounded-md border flex-col scroll-snap-start" >



          <img src="/collage.svg" alt="reload" className='flex justify-center align-middle items-center border border-gray-700 rounded-md w-full md:w-3/4 lg:w-1/2' />
          <div>
            <Heading>Hacknovate Online</Heading>
            <ul className={`my-3 flex flex-col ${anton.className} tracking-widest`}>
              <li className='font-semibold text-2xl'>Winner: ₹10,000 </li>
              <li className='font-semibold text-2xl'>Runner Up: ₹5,000 </li>
            </ul>
          </div>

          <Link href='https://hacknovate5.devfolio.co/'>
            <button className={`px-6 py-2 text-sm sm:px-12 sm:py-3 sm:text-base md:px-24 md:py-4 md:text-xl hover:bg-white hover:text-black justify-center font-semibold border border-white m-5 backdrop-blur-sm rounded ${anton.className}`}>Register Now</button>
          </Link>


        </div>



      </div>

      {/* <div className='flex justify-center items-center text-center border border-white w-full sm:w-3/4 md:w-2/5 mx-auto my-5 py-4'>
        <h2 className={`font-bold text-xl ${anton.className} tracking-wider`}>Winning Stakes: ₹500K and Beyond!</h2>
      </div> */}


    </motion.div>
  )
}

export default Prizes