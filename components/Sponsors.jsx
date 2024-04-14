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
        <div className="h-screen flex justify-center items-center" id='sponsors'>
            <Image src="/sponsors.svg" alt="Sponsors" width={1000} height={1000} className="" />
        </div>
    )
}

export default Sponsors