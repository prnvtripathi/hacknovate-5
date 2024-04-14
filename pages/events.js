import Image from "next/image"

const page = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Image src="/events.svg" alt="Sponsors" width={1000} height={1000} className="" />
    </div>
  )
}

export default page