import Heading from './Heading'
import localFont from 'next/font/local'
import Link from 'next/link'

const title = localFont({
    src: './../assets/fonts/ChaletComprime-CologneSixty.ttf',
})

const Sponsors = () => {
    return (
        <div className='bg-gray-900 py-3 my-12'>
            <div className='w-11/12 mx-auto'>
                <Heading>Our Sponsors</Heading>

                {/* Presented By Sponsors */}
                <div className='py-12'>
                    <h2 className={`text-3xl md:text-6xl text-center md:text-left text-green-500 mb-4 ${title.className}`}>
                        Presented By
                    </h2>
                    <div className='flex flex-col justify-evenly items-center md:flex-row gap-y-4'>
                        <Link href={'https://hive.io/'}>
                            <img src='/sponsors/hive.svg' alt='sponsor' className='w-80 mx-auto object-contain' />
                        </Link>
                    </div>
                </div>

                {/*Powered by Sponsors */}
                <div className='py-12'>
                    <h2 className={`text-3xl md:text-6xl text-center md:text-left text-yellow-500 mb-4 ${title.className}`}>
                        Powered By
                    </h2>
                    <div className='flex flex-col justify-evenly items-center md:flex-row gap-y-4'>
                        <Link href={'https://diamanteblockchain.com/'}>
                            <img src='/sponsors/diamante.svg' alt='sponsor' className='w-72 mx-auto object-contain bg-white p-2 rounded-lg' />
                        </Link>
                    </div>
                </div>

                {/* Diamond Sponsors */}
                <div className='py-12'>
                    <h2 className={`text-2xl md:text-5xl text-center md:text-left text-blue-500 mb-4 ${title.className}`}>
                        Diamond Sponsors
                    </h2>
                    <div className='flex flex-col justify-evenly items-center md:flex-row gap-y-4'>
                        <Link href={'https://www.campaigningsource.com/'}>
                            <img src='/sponsors/campaigningsource.png' alt='sponsor' className='w-60 mx-auto object-contain' />
                        </Link>
                        <Link href={'https://serverbyt.in/'}>
                            <img src='/sponsors/serverbyt.png' alt='sponsor' className='w-60 mx-auto object-contain bg-white p-2 rounded-lg' />
                        </Link>
                        <Link href={"https://drifko.com/"}>
                            <img src='/sponsors/drifko.png' alt='sponsor' className='w-60 mx-auto p-2 object-contain' />
                        </Link>
                    </div>
                </div>

                {/* Gold Sponsors */}
                <div className='py-12'>
                    <h2 className={`text-2xl md:text-5xl text-center md:text-left text-yellow-500 mb-4 ${title.className}`}>
                        Gold Sponsors
                    </h2>
                    <div className='flex flex-col justify-evenly items-center md:flex-row gap-y-4'>
                        <Link href={'https://polygon.technology/'}>
                            <img src='/sponsors/polygon.png' alt='sponsor' className='w-60 mx-auto object-contain' />
                        </Link>
                        <Link href={"https://ethindia.co/"}>
                            <img src='/sponsors/eth-india-new.png' alt='sponsor' className='w-60 mx-aut rounded-3xl p-2 object-contain' />
                        </Link>
                    </div>
                </div>

                {/* Silver Sponsors */}
                <div className='py-12'>
                    <h2 className={`text-2xl md:text-5xl text-center md:text-left text-gray-300 mb-4 ${title.className}`}>
                        Silver Sponsors
                    </h2>
                    <div className='grid md:grid-cols-2 gap-y-4 place-content-center items-center'>
                        <Link href={"https://www.solcanvas.xyz/"}>
                            <img src='/sponsors/solcanvas.png' alt='sponsor' className='w-80 mx-auto object-contain' />
                        </Link>
                        <Link href={"https://ripenapps.com/"}>
                            <img src='/sponsors/ripenapps.png' alt='sponsor' className='w-80 mx-auto object-contain rounded-lg' />
                        </Link>
                        <Link href={"https://indibus.net/"}>
                            <img src='/sponsors/indibus.png' alt='sponsor' className='w-80 mx-auto p-3 bg-black object-contain rounded-lg' />
                        </Link>
                        <Link href={"https://indilearn.in/"}>
                            <img src='/sponsors/indilearn.png' alt='sponsor' className='w-80 mx-auto p-3 bg-black object-contain rounded-lg' />
                        </Link>
                    </div>
                </div>

                {/* General Sponsors */}
                <div className='py-12'>
                    <h2 className={`text-2xl md:text-5xl text-center md:text-left mb-4 ${title.className}`}>
                        General Sponsors
                    </h2>
                    <div className='flex flex-col justify-evenly items-center md:flex-row gap-y-4'>
                        <Link href={"https://interviewbuddy.net/"}>
                            <img src='/sponsors/interviewbuddy.png' alt='sponsor' className='w-60 mx-auto object-contain' />
                        </Link>
                        <Link href={"https://gen.xyz/"}>
                            <img src='/sponsors/xyz.png' alt='sponsor' className='w-60 mx-auto bg-white rounded-3xl p-2 object-contain' />
                        </Link>
                    </div>
                </div>

                {/* Track Sponsors */}
                <div className=''>
                    <h2 className={`text-2xl md:text-5xl text-center md:text-left mb-4 ${title.className}`}>
                        Track Sponsors
                    </h2>
                    <div className='flex flex-col justify-evenly items-center md:flex-row'>
                        <Link href={"https://in.superteam.fun/"}>
                            <img src='/sponsors/stindia.png' alt='sponsor' className='w-60 mx-auto object-contain' />
                        </Link>
                        <Link href={"https://www.verbwire.com/"}>
                            <img src='/sponsors/verbwire.png' alt='sponsor' className='w-60 mx-auto object-contain bg-white p-2 rounded-lg' />
                        </Link>
                    </div>
                </div>

                {/* Platform Sponsors */}
                <div className='py-12'>
                    <h2 className={`text-2xl md:text-5xl text-center md:text-left mb-4 ${title.className}`}>
                        Platform Sponsor
                    </h2>
                    <div className='flex flex-col justify-evenly items-center md:flex-row'>
                        <Link href={"https://devfolio.co/"}>
                            <img src='/sponsors/devfolio.png' alt='sponsor' className='w-60 mx-auto object-contain' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sponsors