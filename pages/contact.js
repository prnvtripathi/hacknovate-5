import Heading from '@/components/Heading'
import React from 'react'
import { Anton } from 'next/font/google'
import { FaBusAlt } from "react-icons/fa";
import { IoAirplaneOutline } from "react-icons/io5";
import { IoTrainOutline } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import localFont from 'next/font/local'
import Link from 'next/link';
import { FaExternalLinkAlt } from "react-icons/fa";

const pricedown = localFont({
    src: './../assets/fonts/pricedown.ttf',
})


const anton = Anton({
    subsets: ['latin-ext'],
    weight: ["400"],
})

const phoneNumbers = [
    { name: "Keshav Malik", phone: "+91 8800134039" },
    { name: "Pranav Tripathi", phone: "+91 9560993089" },
    { name: "Kanishk Chaurasia", phone: "+91 9312442192" },
    { name: "Mridul Goel", phone: "+91 8375832267" }
];

const contact = () => {
    return (
        <div className='flex flex-col md:pt-32 md:px-10 px-5 gap-10'>
            <div className=''>
                <div className={`${pricedown.className} text-5xl`} >
                    How can we help you?
                </div>


                <div className={`text-md md:text-xl text-gray-200 text-left font-['Inter']`}>
                    Need guidance, troubleshooting, or simply want to connect with fellow enthusiasts? <br />
                    Don't hesitate to reach out for assistance and collaboration opportunities!
                </div>

                <div className='pt-6'>
                    <div className={`text-lg md:text-xl text-left ${anton.className}`}>
                        Reaching ABES Institute of Technology
                    </div>
                    <div style={{ width: "100%" }}>
                        <iframe
                            width="100%"
                            height="300"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ABESIT+(Hacknovate%205.0)&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                <div
                    className="flex flex-col items-start p-6 gap-8 
                rounded-[1rem] border border-[rgba(255,255,255,0.5)]"
                    style={{
                        background:
                            "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
                    }}
                >
                    <div className='bg-red-500 p-3 rounded-full' >
                        <IoTrainOutline size={40} className='hover:scale-110  hover:rotate-[360deg] transition-all duration-1000 ease-in-out' />
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className="text-white text-[1.125rem] font-[600] md:text-[1.25rem]">
                            By Train
                        </p>
                        <p className="text-[#D1CAC7] font-['Inter'] text-[1rem] font-normal md:text-[1.125rem]">
                            The ABES Institute of Technology is situated about 5 kilometers from the Ghaziabad Railway Station. Typically, the auto fare for this distance ranges from ₹100 to ₹150.
                        </p>
                    </div>
                </div>

                <div
                    className="flex flex-col items-start p-6 gap-8 
                rounded-[1rem] border border-[rgba(255,255,255,0.5)]"
                    style={{
                        background:
                            "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
                    }}
                >
                    <div className='bg-yellow-500 p-3 rounded-full' >
                        <IoAirplaneOutline size={40} className='hover:scale-110  hover:rotate-[360deg] transition-all duration-1000 ease-in-out' />
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <p className="text-white text-[1.125rem] font-[600] md:text-[1.25rem]">
                            By Air
                        </p>
                        <p className="text-[#D1CAC7] font-['Inter'] text-[1rem] font-normal md:text-[1.125rem]">
                            Nearest Airport from the campus is the IGI Airport, New Delhi. The distance between the airport and the campus is around 45 kilometers and the fare for a taxi ride from the airport is typically around ₹800-₹1000.
                        </p>
                    </div>
                </div>

                <div
                    className="flex flex-col items-start p-6 gap-8 
                rounded-[1rem] border border-[rgba(255,255,255,0.5)]"
                    style={{
                        background:
                            "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
                    }}
                >
                    <div className='bg-green-500 p-3 rounded-full' >
                        <TbBus size={40} className='hover:scale-110  hover:rotate-[360deg] transition-all duration-1000 ease-in-out' />
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <p className="text-white text-[1.125rem] font-[600] md:text-[1.25rem]">
                            By Bus
                        </p>
                        <p className="text-[#D1CAC7] font-['Inter'] text-[1rem] font-normal md:text-[1.125rem]">
                            Kashmiri Gate & Anand Vihar ISBT are the nearest ISBTs from the campus. The distance fromthe campus is around 20 kilometers and the fare for a taxi ride from the bus stand is typically around ₹300-₹400.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between py-8 md:flex-row flex-col md:gap-0 gap-10">
                <div>
                    <div className={`${pricedown.className} text-4xl`} >
                        Call Us
                    </div>
                    <div className={`flex flex-col text-md ${anton.className}`}>

                        {
                            phoneNumbers.map((item, index) => (
                                <div key={index} className="mb-2">
                                    <span className="font-light">{item.name} :</span>
                                    <a href={`tel:${item.phone}`} className="ml-2 text-blue-500 hover:underline">{item.phone}</a>
                                </div>
                            ))
                        }

                    </div>

                </div>

                <div>
                    <div className={`${pricedown.className} text-4xl`}> Address </div>
                    <div className={`text-lg ${anton.className}`}>
                        ABES Institute of Technology, 19th km Stone, NH-24, Ghaziabad, Uttar Pradesh, 201009
                    </div>
                    <Link className='flex gap-2 items-center text-blue-400' target='_blank' href={'https://www.google.com/maps/dir//ABESIT+GROUP+OF+INSTITUTIONS+ABESIT+Campus+Rd+near+Crossing+Republik,+NE-3,+Crossings+Republik+Ghaziabad,+Uttar+Pradesh+201009/@28.6336112,77.4476854,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x390cee3d4e3485ed:0xe0fe1689b57c7d2e'}> <FaExternalLinkAlt stroke='1' /> <span> Google Maps</span> </Link>
                </div>

            </div>

        </div>
    )
}

export default contact