import localFont from 'next/font/local'

const title = localFont({
    src: './../assets/fonts/ChaletComprime-CologneSixty.ttf',
})

export default function Heading({ children }) {
    return (
        <h2 className={`${title.className} text-4xl md:text-7xl text-center md:text-left mb-4`}>
            {children}
        </h2>
    )
}