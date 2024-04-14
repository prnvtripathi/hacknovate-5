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

            <img src="/schedule.svg" alt="Sponsors" className="hidden md:flex" />
            <img src="/schedulemobile.svg" alt="Sponsors" className="flex md:hidden" />
        </div>
    )
}