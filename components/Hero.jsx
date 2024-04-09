import localFont from 'next/font/local'

const pricedown = localFont({
    src: './../assets/fonts/pricedown.ttf',
})

export default function Hero() {
    return (
        <>
            <div className={`${pricedown.className} text-6xl bg-[url(/hero.jpg)] bg-cover md:bg-cover bg-no-repeat h-screen flex justify-center items-center`}>
                <div className='bg-transparent md:bg-gradient-to-r md:from-black md:to-transparent h-screen w-screen flex items-center justify-center'>
                    HERO
                </div>
            </div>
        </>
    )
}