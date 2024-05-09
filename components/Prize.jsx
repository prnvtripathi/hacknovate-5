import Heading from './Heading'
import { motion } from 'framer-motion'
import localFont from 'next/font/local'

const title = localFont({
  src: './../assets/fonts/ChaletComprime-CologneSixty.ttf',
})

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

      {/* <div className='my-4 flex flex-col sm:flex-row gap-y-6 justify-evenly overflow-y-auto scroll-snap-y-mandatory'>


        <div className="bg-[url(/bg.webp)] bg-cover h-screen flex items-center justify-center w-full sm:w-2/5 rounded-md border flex-col .bg-50 scroll-snap-start" >


          <img src="/collage.svg" alt="reload" className='flex justify-center align-middle items-center border border-gray-700 rounded-md w-full md:w-3/4 lg:w-1/2' />
          <div>
            <Heading>Hacknovate Offline</Heading>
            <ul className={`my-3 flex flex-col tracking-widest`}>
              <li className='font-semibold text-2xl'>Winner: ₹25,000 </li>
              <li className='font-semibold text-2xl'>Runner Up: ₹15,000 </li>
            </ul>
          </div>
          
          <Link href='https://hacknovate5.devfolio.co/'>
            <button className={`px-6 py-2 text-sm sm:px-12 sm:py-3 sm:text-base md:px-24 md:py-4 md:text-xl hover:bg-white hover:text-black justify-center font-semibold border border-white m-5 backdrop-blur-sm rounded ${anton.className}`}>Register Now</button>
          </Link>


        </div>

        <div className="bg-[url(/hero.webp)] bg-cover bg-center h-screen flex items-center justify-center w-full sm:w-2/5 rounded-md border flex-col scroll-snap-start" >



          <img src="/collage.svg" alt="reload" className='flex justify-center align-middle items-center border border-gray-700 rounded-md w-full md:w-3/4 lg:w-1/2' />
          <div>
            <Heading>Hacknovate Online</Heading>
            <ul className={`my-3 flex flex-col tracking-widest`}>
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

      <h2 className={`text-3xl font-bold text-center mb-3 tracking-wider ${title.className}`}>Offline Prizes</h2>
      <div className='grid md:grid-cols-2 gap-4 items-center place-content-center mb-8'>
        <div className='bg-[url(/bg.jpg)] bg-center bg-cover rounded-xl'>
          <div className='flex items-center justify-center p-4 bg-black bg-opacity-30 backdrop-blur-sm rounded-xl hover:backdrop-blur-0 transition-all'>
            <img src='/1st.svg' alt=' ' className='w-32' />
            <div>
              <h2 className='text-4xl font-bold text-center'>Winner</h2>
              <p className='text-center text-6xl font-bold text-michael-blue'>₹25,000</p>
            </div>
          </div>
        </div>
        <div className='bg-[url(/bg.jpg)] bg-center bg-cover rounded-xl'>
          <div className='flex items-center justify-center p-4 bg-black bg-opacity-30 backdrop-blur-sm rounded-xl hover:backdrop-blur-0 transition-all'>
            <img src='/2nd.svg' alt=' ' className='w-32' />
            <div>
              <h2 className='text-4xl font-bold text-center'>Runner-up</h2>
              <p className='text-center text-6xl font-bold text-michael-blue'>₹15,000</p>
            </div>
          </div>
        </div>
      </div>




      <h2 className={`text-3xl font-bold text-center mb-3 tracking-wider ${title.className}`}>Online Prizes</h2>
      <div className='grid md:grid-cols-2 gap-4 items-center place-content-center mb-8'>
        <div className='bg-[url(/hero.jpg)] bg-center bg-cover rounded-xl'>
          <div className='flex items-center justify-center p-4 bg-black bg-opacity-30 backdrop-blur-sm rounded-xl hover:backdrop-blur-0 transition-all'>
            <img src='/1st.svg' alt=' ' className='w-32' />
            <div>
              <h2 className='text-4xl font-bold text-center'>Winner</h2>
              <p className='text-center text-6xl font-bold text-michael-blue'>₹10,000</p>
            </div>
          </div>
        </div>
        <div className='bg-[url(/hero.jpg)] bg-center bg-cover rounded-xl'>
          <div className='flex items-center justify-center p-4 bg-black bg-opacity-30 backdrop-blur-sm rounded-xl hover:backdrop-blur-0 transition-all'>
            <img src='/2nd.svg' alt=' ' className='w-32' />
            <div>
              <h2 className='text-4xl font-bold text-center'>Runner-up</h2>
              <p className='text-center text-6xl font-bold text-michael-blue'>₹5,000</p>
            </div>
          </div>
        </div>
      </div>



      <div className='grid md:grid-cols-2 gap-4 items-center justify-center place-content-center mb-8'>
        <div className='flex flex-col items-center justify-center w-72 h-96 mx-auto p-4 bg-white bg-opacity-80 rounded-xl hover:transform hover:rotate-12 hover:scale-105 transition-all'>
          <img src='/girl.png' alt=' ' className='w-32' />
          <div>
            <h2 className='text-2xl font-bold text-center text-black'>Best All Girls Team</h2>
            <p className='text-center text-6xl font-bold font-outline-2 text-michael-blue'>₹2,500</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-72 h-96 mx-auto p-4 bg-white bg-opacity-80 rounded-xl hover:transform hover:rotate-12 hover:scale-105 transition-all'>
          <img src='/newbie.png' alt=' ' className='w-60' />
          <div>
            <h2 className='text-2xl font-bold text-center text-black'>Best Beginners Team</h2>
            <p className='text-center text-6xl font-bold font-outline-2 text-michael-blue'>₹2,500</p>
          </div>
        </div>
      </div>


      {/* Track Prizes */}

      <div className='flex flex-col gap-y-12'>

        {/* Hive */}
        <h2 className={`text-3xl font-bold text-center mb-3 tracking-wider ${title.className}`}>Track Prizes</h2>
        <div>
          <div className='grid md:grid-cols-2 gap-4 items-center place-content-center mb-8'>
            <div className=''>
              <img src='/sponsors/hive.svg' alt=' ' className='w-1/2 mx-auto' />
              <p className='text-center text-black p-2 w-fit rounded-xl mx-auto mt-3 text-4xl bg-white font-semibold'>$2000</p>
            </div>
            <div className='flex flex-col items-center justify-around mx-auto p-4 bg-white bg-opacity-80 rounded-xl hover:transform hover:rotate-12 hover:scale-105 transition-all'>
              <h3 className='text-2xl font-bold text-center bg-black p-1.5 rounded-lg'>Hive - The Blockchain & Cryptocurrency for Web3</h3>
              <div className='flex flex-col gap-y-3'>
                <p className='text-center text-black font-semibold'>
                  To be eligible for Hive Track Prize Pool, your project should have at least 1 of these 3 three things implemented in your final build -
                </p>
                <ol className='text-black font-semibold list-decimal pl-4'>
                  <li>Read data from the Hive blockchain.</li>
                  <li>Broadcast any kind of transaction to the Hive blockchain.</li>
                  <li>Perform a login by interacting with apps like Keychain or HiveAuth, etc.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* ServerByt */}
        <div>
          <div className='grid md:grid-cols-2 gap-4 items-center place-content-center mb-8'>
            <div className=''>
              <img src='/sponsors/serverbyt.png' alt=' ' className='w- mx-auto' />
              <p className='text-center text-black p-2 w-fit rounded-xl mx-auto mt-3 text-4xl bg-white font-semibold'>$9000</p>
            </div>
            <div className='flex flex-col items-center justify-around h-fit mx-auto p-4 bg-white bg-opacity-80 rounded-xl hover:transform hover:rotate-12 hover:scale-105 transition-all'>
              <h3 className='text-2xl font-bold text-center min-w-80 bg-black p-1.5 rounded-lg'>ServerByt Hosting Plan</h3>
              <p className='text-center text-black font-semibold'>
                ServerByt is providing Blaze plan of worth $30 to each participants
              </p>
            </div>
          </div>
        </div>

        {/* Polygon */}
        <div>
          <div className='grid md:grid-cols-2 gap-4 items-center place-content-center mb-8'>
            <div className=''>
              <img src='/sponsors/polygon.png' alt=' ' className='w-1/2 mx-auto' />
              <p className='text-center text-black p-2 w-fit rounded-xl mx-auto mt-3 text-4xl bg-white font-semibold'>$200</p>
            </div>
            <div className='flex flex-col items-center justify-around h-fit mx-auto p-4 bg-white bg-opacity-80 rounded-xl hover:transform hover:rotate-12 hover:scale-105 transition-all'>
              <h3 className='text-2xl font-bold text-center min-w-80 bg-black p-1.5 rounded-lg'>Best hack built on Polygon</h3>
              <p className='text-center text-black font-semibold'>
                Read about the bounty details and find code templates for Polygon <a href="https://nsb.dev/polygon-bounty" className='underline'>here:</a>
              </p>
            </div>
          </div>
        </div>


        {/* Eth India */}
        <div>
          <div className='grid md:grid-cols-2 gap-4 items-center place-content-center mb-8'>
            <div className=''>
              <img src='/sponsors/ethindia.png' alt=' ' className='w-1/2 mx-auto' />
              <p className='text-center text-black p-2 w-fit rounded-xl mx-auto mt-3 text-4xl bg-white font-semibold'>$100</p>
            </div>
            <div className='flex flex-col items-center justify-around h-fit mx-auto p-4 bg-white bg-opacity-80 rounded-xl hover:transform hover:rotate-12 hover:scale-105 transition-all'>
              <h3 className='text-2xl font-bold text-center min-w-80 bg-black p-1.5 rounded-lg'>Best hack built on Ethereum</h3>
              <p className='text-center text-black font-semibold'>
                Winner of this track receives $100 in prizes from ETHIndia.
              </p>
            </div>
          </div>
        </div>


        {/* Verbwire */}
        <div>
          <div className='grid md:grid-cols-2 gap-4 items-center place-content-center mb-8'>
            <div className=''>
              <img src='/sponsors/verbwire.png' alt=' ' className='w-1/2 mx-auto rounded-lg' />
              <p className='text-center text-black p-2 w-fit rounded-xl mx-auto mt-3 text-4xl bg-white font-semibold'>$5000</p>
            </div>
            <div className='flex flex-col items-center justify-around h-fit mx-auto p-4 bg-white bg-opacity-80 rounded-xl hover:transform hover:rotate-12 hover:scale-105 transition-all'>
              <h3 className='text-2xl font-bold text-center min-w-80 bg-black p-1.5 rounded-lg'>Verbwire API</h3>
              <p className='text-center text-black font-semibold'>
                Best Use of AI & Verbwire API - Up to $4,000 in Premium API Credits, across up to 15 teams ($45 credit per team member)
              </p>
            </div>
          </div>
        </div>

        {/* Campaigning Source */}
        <div>
          <div className='grid md:grid-cols-2 gap-4 items-center place-content-center mb-8'>
            <div className=''>
              <img src='/sponsors/campaigningsource.png' alt=' ' className='w-1/2 mx-auto' />
              <p className='text-center text-black p-2 w-fit rounded-xl mx-auto mt-3 text-4xl bg-white font-semibold'>$1800</p>
            </div>
            <div className='flex flex-col items-center justify-around gap-4 mx-auto p-4 bg-white bg-opacity-80 rounded-xl hover:transform hover:rotate-12 hover:scale-105 transition-all'>
              <h3 className='text-2xl font-bold text-center bg-black p-1.5 rounded-lg'>Best Business Idea</h3>
              <div className='flex flex-col gap-y-3'>
                <p className='text-center text-black font-semibold'>
                  Develop a solution that leverages emerging technologies, sustainable practices, or novel business models to create tangible impact and drive positive change in the world. Whether disrupting existing industries or creating entirely new markets, your solution should demonstrate creativity, feasibility, and market potential.
                </p>
                <ol className='text-black font-semibold list-decimal pl-4'>
                  <li>Impact : How does your solution address a pressing societal challenge or enhance daily life experiences?</li>
                  <li>Scalability : Can your solution grow to reach a wide audience or market?</li>
                  <li>Sustainability : Is your solution environmentally and socially sustainable in the long term?</li>
                  <li>Feasibility : Can your solution be implemented with existing resources and technologies?</li>
                  <li>Market Potential : Does your solution have the potential to evolve into a viable startup venture?</li>
                </ol>
              </div>
            </div>
          </div>
        </div>



      </div>



    </motion.div>
  )
}

export default Prizes