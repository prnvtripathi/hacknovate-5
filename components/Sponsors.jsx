import Image from 'next/image'

const Sponsors = () => {
    return (
        <div className="h-screen flex justify-center items-center" id='sponsors'>
            <Image src="/sponsors.svg" alt="Sponsors" width={1000} height={1000} className="" />
        </div>
    )
}

export default Sponsors