import Image from 'next/image';
import Heading from './Heading';
import { Anton } from 'next/font/google';

const anton = Anton({
    subsets: ['latin-ext'],
    weight: ["400"],
})

const data = [
    {
        name: "GDSC ABESIT",
        img: "/comm/GDSC.png",
    },
    {
        name: "IT Technical Club",
        img: "/comm/ITTC.jpg",
    },
    {
        name:  "Kalrav Club",
        img: "/comm/kalrav.png",
    },
    {
        name: "Aayaam Club",
        img: "/comm/aayaam.png",
    }
]

export default function CommPartners() {
    return (
        <div className="w-11/12 mx-auto">
            <Heading>
                Community Partners
            </Heading>
            <div className='grid md:grid-cols-3 place-content-center items-center'>
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-5">
                        <Image src={item.img} width={200} height={200} />
                        <p className={`text-2xl ${anton.className}`}>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}