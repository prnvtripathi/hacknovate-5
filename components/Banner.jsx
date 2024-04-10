import Link from "next/link";
import localFont from 'next/font/local'
import { Anton } from 'next/font/google'

const pricedown = localFont({
    src: './../assets/fonts/pricedown.ttf',
})

const anton = Anton({
    subsets: ['latin-ext'],
    weight: ["400"],
})

export default function Banner() {
    return (
        <section className="text-white w-full md:w-11/12 mx-auto bg-black outline outline-1 rounded-xl">
            <div className="mx-auto max-w-screen-xl px-4 py-12 md:flex">
                <div className="mx-auto max-w-3xl text-center">
                    <h2
                        className={`bg-gradient-to-r from-[#274721] to-white bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl ${anton.className}`}
                    >
                        Code like a Pro.

                        <span className="sm:block"> Hack like a Heist. </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">

                    </p>

                    <div className={`mt-8 flex flex-wrap justify-center gap-4 ${pricedown.className}`}>
                        <Link
                            className="block w-full rounded border border-white bg-white px-12 py-3 text-xl md:text-3xl transition-all font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="https://www.hacknovate5.devfolio.co/"
                        >
                            Get Started
                        </Link>

                        <Link
                            className="block w-full rounded border border-white px-12 py-3 text-xl md:text-3xl transition-all font-medium text-white hover:text-black hover:bg-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="https://discord.gg/kaGJwHqW8t"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}