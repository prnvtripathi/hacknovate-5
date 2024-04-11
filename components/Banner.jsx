import Image from "next/image"
import { motion } from 'framer-motion'

export default function Banner() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="">
            {/* TO be compressed */}
            <Image src="/banner.png" alt="banner" width={1200} height={540} className="mx-auto rounded-lg w-11/12" />
        </motion.section>
    )
}