import Heading from './Heading'
import { motion } from 'framer-motion'

const Prizes = () => {
  return (

    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, threshold: 0.5, amount: 0.5 }}
      className='w-11/12 mx-auto'>

      <Heading>Prizes</Heading>

      <div className='my-4 flex flex-col sm:flex-row justify-evenly overflow-y-auto scroll-snap-y-mandatory'>

        <div className="bg-[url(/hero.jpg)] bg-cover bg-center h-screen flex items-center justify-center w-full sm:w-2/5 rounded-md border flex-col scroll-snap-start" >



          <img src="./Frame 2.jpg" alt="reload" className='flex justify-center align-middle items-center border border-gray-700 rounded-md w-full md:w-3/4 lg:w-1/2' />
          <div>
            <Heading>Hacknovate Online</Heading>
            <ul className='my-3 flex flex-col'>
              <li className='font-semibold text-2xl'>Winner: 200$ </li>
              <li className='font-semibold text-2xl'>Runner Up: 100$ </li>
              <li className='font-semibold text-2xl'>Second Runner Up: 50$ </li>
            </ul>
          </div>


          <button className='px-6 py-2 text-sm sm:px-12 sm:py-3 sm:text-base md:px-24 md:py-4 md:text-xl hover:bg-white hover:text-black justify-center font-semibold border border-white m-5'>Register Now</button>



        </div>


        <div className="bg-[url(/map2.jpeg)] bg-center h-screen flex items-center justify-center w-full sm:w-2/5 rounded-md border flex-col .bg-50 scroll-snap-start" >


          <img src="./Frame 2.jpg" alt="reload" className='flex justify-center align-middle items-center border border-gray-700 rounded-md w-full md:w-3/4 lg:w-1/2' />
          <div>
            <Heading>Hacknovate Offline</Heading>
            <ul className='my-3 flex flex-col'>
              <li className='font-semibold text-2xl'>Winner: 500$ </li>
              <li className='font-semibold text-2xl'>Runner Up: 200$ </li>
              <li className='font-semibold text-2xl'>Second Runner Up: 100$ </li>
            </ul>
          </div>

          <button className='px-6 py-2 text-sm sm:px-12 sm:py-3 sm:text-base md:px-24 md:py-4 md:text-xl hover:bg-white hover:text-black justify-center font-semibold border border-white m-5'>Register Now</button>



        </div>


      </div>

      <div className='flex justify-center align-middle items-center border border-white w-full sm:w-3/4 md:w-2/5 mx-auto my-5 py-4'>
        <h1 className='font-bold text-xl'>Winning Stakes: 500K and Beyond!</h1>
      </div>


    </motion.div>
  )
}

export default Prizes