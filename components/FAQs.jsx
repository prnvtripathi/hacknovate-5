import { Anton } from 'next/font/google'
import Heading from './Heading'
import { motion } from 'framer-motion'

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

        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-11/12 mx-auto mt-20 md:mt-2 mb-12">
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
        </motion.div>

    )
}