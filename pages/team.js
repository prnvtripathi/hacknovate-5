import Head from 'next/head';
import { useState } from 'react';
import TeamPage from '@/components/Team';
import Heading from '@/components/Heading';
import localFont from 'next/font/local';
import Orgcom from '@/components/Orgcom';

const pricedown = localFont({
    src: './../assets/fonts/pricedown.ttf',
});

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Students Co-ordinators');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <Head>
                <title>Hacknovate 5 | Team</title>
            </Head>
            <div className='md:mt-24'>
                <div className={`mx-auto text-white md:w-11/12 ${pricedown.className}`}>
                    <Heading>Meet the Team</Heading>
                </div>

                <div className="w-2/3 mx-auto mt-6 mb-3">
                    <div className="flex flex-col md:flex-row items-center mb-2 justify-center md:justify-evenly">
                        <div
                            className={`border-transparent cursor-pointer pt-2 pb-1 px-1 border-b-2 font-medium text-xl ${activeTab === 'Students Co-ordinators' ? ' border-michael-blue text-michael-blue ' : 'text-gray-400 hover:text-gray-500 hover:border-gray-400'
                                }`}
                            onClick={() => handleTabClick('Students Co-ordinators')}
                        >
                            Students Co-ordinators
                        </div>
                        <div
                            className={`border-transparent cursor-pointer pt-2 pb-1 px-1 border-b-2 font-medium text-xl ${activeTab === 'Organisers' ? ' border-michael-blue text-michael-blue ' : 'text-gray-400 hover:text-gray-500 hover:border-gray-400'
                                }`}
                            onClick={() => handleTabClick('Organisers')}
                        >
                            Organisers
                        </div>
                    </div>
                    <div className="mt-2">
                        {activeTab === 'Students Co-ordinators' && <TeamPage />}
                        {activeTab === 'Organisers' && <Orgcom />}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Tabs
