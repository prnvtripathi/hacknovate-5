
import { PastEvents } from '@/data/pastEvent'
import Link from 'next/link'
import Head from 'next/head'
import localFont from 'next/font/local';
import { Anton } from 'next/font/google';

const pricedown = localFont({
  src: './../assets/fonts/pricedown.ttf',
});


const anton = Anton({
  subsets: ['latin-ext'],
  weight: ['400'],
})

const page = () => {
  return (
    <>

    

    <div>
        <div className='mt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:mt-24 my-6 '>
            <div className={`text-5xl ${pricedown.className}`}>
                Our Events
            </div>

            <div className='text-gray-400 text-lg mt-1'>
                We are all about fun and joy have a glance at some of our past and ongoing events...
            </div>
        </div>
        <div className=' mx-10 md:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 flex flex-wrap gap-8'>
            {PastEvents.map((event) => (
                <div key={event.id} className=' border-[1px] border-gray-300 w-fit p-1 rounded-3xl'>
                    <div>
                        <img src={event.img} alt='err' className='w-72 aspect-square object-cover rounded-3xl justify-center flex items-center mx-auto saturate-50 hover:saturate-100 transition-all'/>
                    </div>

                    <div className='my-5 text-black px-2'>
                        
                        <div className={`font-medium text-xl text-white ${anton.className}`}>
                            {event.title}
                        </div>
                        <div className='text-xs text-white '>
                            {event.date}
                        </div>

                        <div className='text-gray-500 text-xs my-2'>
                            {event.description}
                        </div>

                        <div >
                            {
                                event.link ? (
                                    <Link className=' text-white border border-white rounded-xl flex justify-center items-center h-10 mt-5 hover:cursor-pointer' href={event.link}> Know More </Link>
                                ) : (<div className=' text-gray-500 bg-gray-300 rounded-xl flex justify-center items-center h-10 mt-5'>
                                    More Info Coming soon
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</>
  )
}

export default page