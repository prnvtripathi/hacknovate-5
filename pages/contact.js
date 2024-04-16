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

const chalet = localFont({
    src: './../assets/fonts/ChaletComprime-CologneSixty.ttf'
})

// const chaletLondon = localFont({})


const anton = Anton({
    subsets: ['latin-ext'],
    weight: ["400"],
})

const phoneNumbers = [
    { name: "Dr. Sandeep Kumar", phone: "+91 9953867649" },
    { name: "Prof. Avdhesh Kr Tiwari", phone: "+91 8887793030" },
    { name: "Keshav Malik", phone: "+91 8800134039" },
    { name: "Pranav Tripathi", phone: "+91 9560993089" },
    { name: "Kanishk Chaurasia", phone: "+91 9312442192" },
    { name: "Mridul Goel", phone: "+91 8375832267" },
    { name: "Sushant Sharma", phone: "+91 9103226627" },

];

const contact = () => {
    return (
        <div className='flex flex-col md:pt-32 md:px-10 px-5 gap-10'>
            <div className=''>
                <div className={`${chalet.className} text-5xl`} >
                    How can we help you?
                </div>


                <div className={`text-md md:text-lg text-gray-200 text-left`}>
                    Need guidance, troubleshooting, or simply want to connect with fellow enthusiasts? <br />
                    Don't hesitate to reach out for assistance and collaboration opportunities!
                </div>

                <div className='mt-10'>
                    <div className={`text-xl md:text-3xl text-left mb-3 ${anton.className}`}>
                        Reaching <span className='text-michael-blue'>ABES Institute of Technology</span>
                    </div>
                    <div>
                        <iframe
                            width="100%"
                            height="300"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ABESIT+(Hacknovate%205.0)&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            className='rounded-2xl'
                        />
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div
                    className="flex flex-col items-start p-6 gap-8 rounded-2xl outline outline-1 outline-gray-500"
                >
                    <div className='bg-michael-blue p-3 rounded-full' >
                        <IoTrainOutline size={40} className='text-black scale-105 hover:rotate-90 transition-all' />
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className={`text-4xl ${chalet.className} tracking-wider`}>
                            By Train
                        </p>
                        <p className={`text-lg`}>
                            The ABES Institute of Technology is situated about 5 kilometers from the Ghaziabad Railway Station. Typically, the auto fare for this distance ranges from ₹100 to ₹150.
                        </p>
                    </div>
                </div>

                <div
                    className="flex flex-col items-start p-6 gap-8 rounded-2xl outline outline-1 outline-gray-500"
                >
                    <div className='bg-trevor-orange p-3 rounded-full' >
                        <IoAirplaneOutline size={40} className='text-black scale-105 hover:rotate-90 transition-all' />
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <p className={`text-4xl ${chalet.className} tracking-wider`}>
                            By Air
                        </p>
                        <p className={`text-lg`}>
                            Nearest Airport from the campus is the IGI Airport, New Delhi. The distance between the airport and the campus is around 45 kilometers and the fare for a taxi ride from the airport is typically around ₹800-₹1000.
                        </p>
                    </div>
                </div>

                <div
                    className="flex flex-col items-start p-6 gap-8 rounded-2xl outline outline-1 outline-gray-500"
                >
                    <div className='bg-franklin-green p-3 rounded-full' >
                        <TbBus size={40} className='text-black scale-105 hover:rotate-90 transition-all' />
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <p className={`text-4xl ${chalet.className} tracking-wider`}>
                            By Bus
                        </p>
                        <p className={`text-lg`}>
                            Kashmiri Gate & Anand Vihar ISBT are the nearest ISBTs from the campus. The distance fromthe campus is around 20 kilometers and the fare for a taxi ride from the bus stand is typically around ₹300-₹400.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between py-8 md:flex-row flex-col md:gap-0 gap-10">
                <div>
                    <div className={`${chalet.className} text-4xl`} >
                        Call Us
                    </div>
                    <div className={`flex flex-col text-md`}>
                        {phoneNumbers.map((item, index) => (
                            <div key={index} className="mb-2">
                                <span className="font-light">{item.name} :</span>
                                <a href={`tel:${item.phone}`} className="ml-2 text-blue-500 hover:underline">{item.phone}</a>
                            </div>
                        ))
                        }

                    </div>

                </div>

                <div>
                    <div className={`${chalet.className} text-4xl`}> Address </div>
                    <div className={`text-lg`}>
                        ABES Institute of Technology, 19th km Stone, NH-24, Ghaziabad, Uttar Pradesh, 201009
                    </div>
                    <Link className='flex gap-2 items-center text-blue-400' target='_blank' href={'https://maps.app.goo.gl/oa1oGENZECBd6jyB7'}> <FaExternalLinkAlt stroke='1' /> <span> Google Maps</span> </Link>
                </div>

            </div>

        </div>
    )
}

export default contact