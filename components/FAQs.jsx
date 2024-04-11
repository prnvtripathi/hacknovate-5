import { Anton } from 'next/font/google'
import Heading from './Heading'
import { motion } from 'framer-motion'

const anton = Anton({
    subsets: ['latin'],
    weight: ["400"],
})

const data = [
    {
        ques: "What I required to be in the Hacknovate 5.0?",
        ans: "You need your laptop and charge along with your team rest leave to us, we’ll take care of your requirement"
    },
    {
        ques: "Is the team compulsory?",
        ans: "Yes, you need a team. Hacknovate 5.0 is a team event and we encourage programmers to work together. You may have minimum 3 and maximum 4 members in your team."
    },
    {
        ques: " What if I'm a beginner in tech? Can I still participate?",
        ans: "Absolutely! Hacknovate 5.0 is open to participants of all skill levels, from beginners to experienced tech enthusiasts. We offer workshops and mentorship to help you learn and grow during the event.        "
    },
    {
        ques: " Is it online or offline?",
        ans: "Hacknovate 5.0 is the hybrid module of Hacknovate series i.e. to be executed in online as well as offline mode parallelly. By which to some enthusiastic Hackers, that have issue to reach to the venue they can join us online and can’t miss this great opportunity."
    },
    {
        ques: "Is there any fees for registration?",
        ans: "No, Hacknovate 5.0 is free of cost, you just need to make a team and register for participating and showcasing what skills you have."
    },
    {
        ques: " Will the organizers provide food for the participants at the hackathon?",
        ans: "Yes, the organizers will provide food for the participants at the hackathon."
    },
    {
        ques: "If there's anything else you'd like to know or discuss that hasn't been addressed here",
        ans: `For any other inquiries not covered here, please don't hesitate to reach out to us via email at hacknovate@abesit.edu.in`
    },
]

export default function FAQs() {
    return (

        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-11/12 mx-auto py-12">
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