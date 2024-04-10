import localFont from 'next/font/local'

const pricedown = localFont({
    src: './../assets/fonts/pricedown.ttf',
})

export default function Heading({ children }) {
    return (
        <h2 className={`${pricedown.className} text-4xl md:text-6xl text-center md:text-left mb-4`}>
            {children}
        </h2>
    )
}