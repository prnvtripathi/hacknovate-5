import localFont from 'next/font/local'

const pricedown = localFont({
    src: './../assets/fonts/pricedown.ttf',
})

export default function Hero() {
    return (
        <>
            <div className={`bg-[url(/hero.jpg)] bg-cover md:bg-cover bg-no-repeat h-screen flex justify-center items-center`}>
                {/* <div className='fixed -z-99 w-screen h-screen'>
                <iframe frameborder="0" height="100%" width="100%"
                    src="https://youtube.com/embed/cd-myPLMXbU?autoplay=1&showinfo=0&autohide=1&controls=0&start=18&mute=1" allowfullscreen referrerPolicy="strict-origin-when-cross-origin">
                </iframe>
            </div> */}
                <div className='bg-transparent md:bg-gradient-to-r md:from-black md:to-transparent h-screen w-screen flex items-center justify-center'>
                    <div className='text-white flex w-full md:w-11/12 flex-col gap-6 justify-start'>
                        <div className='flex flex-col'>
                            <h1 className={`${pricedown.className} text-5xl md:text-8xl`}>Hacknovate 5</h1>
                            <p className='text-lg md:text-2xl'>aajao saare</p>
                        </div>
                        <div>
                            {/* <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Pre Register</span>
                                <span class="relative invisible">Pre Register</span>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}