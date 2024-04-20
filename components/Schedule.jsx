import Image from 'next/image'
import Heading from './Heading'

export default function Schedule() {
    return (
        <div className='w-screen'>
            <div className='w-11/12 mx-auto'>
                <Heading>
                    Schedule
                </Heading>
            </div>

            <img src="/newSchedule.png" alt="Sponsors" className=" md:flex w-full h-auto align-middle mx-auto justify-center"  />
            <img src="/schedulemobile.svg" alt="Sponsors" className="flex md:hidden" />
        </div>
    )
}