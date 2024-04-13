import Image from 'next/image'
import { Rubik_Mono_One, Poppins } from "next/font/google";

const rubik = Rubik_Mono_One({
    subsets: ["latin-ext"],
    weight: ["400"],
});

const poppins = Poppins({
    subsets: ["latin-ext"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Sponsors = () => {
    return (
        <div className="w-screen h-screen flex flex-col md:flex-row text-white items-center justify-center md:p-32">
            <div className='w-full md:w-1/2'>
                <Image src="/lock.svg" alt="Sponsors" width={1000} height={1000} className="w-5/6 mx-auto" />
            </div>
            <div className='w-full md:w-1/2'>
                <h2 className={`text-3xl md:text-5xl text-center md:text-left font-bold mb-3 ${rubik.className}`}>Sponsors</h2>
                <h2 className={`text-base md:text-xl text-center tracking-wide text-gray-500 md:text-left font-semibold mb-2 ${poppins.className}`}>Coming Soon</h2>
            </div>
        </div>
    )
}

export default Sponsors