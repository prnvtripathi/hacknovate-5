import { Anton } from 'next/font/google'
import Heading from './Heading'

const anton = Anton({
    subsets: ['latin'],
    weight: ["400"],
})

const data = [
    {
        ques: "Lorem ipsum dolor sit amet consectetur adipisicing?",
        ans: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
    },
    {
        ques: "Lorem ipsum dolor sit amet consectetur adipisicing?",
        ans: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
    },
    {
        ques: "Lorem ipsum dolor sit amet consectetur adipisicing?",
        ans: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
    }
]

export default function FAQs() {
    return (

        <div className="w-full md:w-11/12 mx-auto">
            <div>
                <Heading>faQs</Heading>
            </div>
            <div className="space-y-4">
                {data.map((item, index) => (
                    <details key={index} className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 border-b-2 pb-3"
                        >
                            <h2 className="font-medium">{item.ques}</h2>

                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-300">
                            {item.ans}
                        </p>
                    </details>
                ))}
            </div>
        </div>

    )
}