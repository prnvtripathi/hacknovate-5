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

                <div className='py-12'>
                    <h2 className={`text-2xl md:text-5xl text-center md:text-left text-yellow-500 mb-4 ${title.className}`}>
                        Gold Sponsors
                    </h2>
                    <div className='flex flex-col justify-evenly items-center md:flex-row gap-y-4'>
                        <Link href={'https://polygon.technology/'}>
                            <img src='/sponsors/polygon.png' alt='sponsor' className='w-60 mx-auto object-contain' />
                        </Link>
                        <Link href={"https://ethindia.co/"}>
                            <img src='/sponsors/ethindia.png' alt='sponsor' className='w-60 mx-auto bg-white rounded-3xl p-2 object-contain' />
                        </Link>
                    </div>
                </div>
                <div className='py-12'>
                    <h2 className={`text-2xl md:text-5xl text-center md:text-left text-gray-300 mb-4 ${title.className}`}>
                        Silver Sponsors
                    </h2>
                    <div className='flex flex-col justify-evenly items-center md:flex-row'>
                        <Link href={"https://www.solcanvas.xyz/"}>
                            <img src='/sponsors/solcanvas.png' alt='sponsor' className='w-80 mx-auto object-contain' />
                        </Link>
                    </div>
                </div>
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
                <div className=''>
                    <h2 className={`text-2xl md:text-5xl text-center md:text-left mb-4 ${title.className}`}>
                        Track Sponsors
                    </h2>
                    <div className='flex flex-col justify-evenly items-center md:flex-row'>
                        <Link href={"https://in.superteam.fun/"}>
                            <img src='/sponsors/stindia.png' alt='sponsor' className='w-60 mx-auto object-contain' />
                        </Link>
                    </div>
                </div>
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