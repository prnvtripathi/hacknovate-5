import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { Anton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const anton = Anton({
  subsets: ["latin-ext"],
  weight: ["400"],
});
function Footer() {
  return (
    <>
      <footer
        id="contact"
        className={`px-6 sm:px-12 md:px-24 py-10 mt-5 bg-black ${anton.className} tracking-widest border-t border-gray-500`}
      >
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo Section */}
          <div className="flex gap-8 items-center">
            <Image src="/abesit.svg" width={120} height={10} />
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={50}
              className="mb-2"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-5">
            <Link href="#">
              <p className="text-white text-[16px]">About</p>
            </Link>
            <Link href="#">
              <p className="text-white text-[16px]">Sponsor</p>
            </Link>
            <Link href="#">
              <p className="text-white text-[16px]">Events</p>
            </Link>
            <Link href="#">
              <p className="text-white text-[16px]">Register</p>
            </Link>
          </div>

          {/* Social Links and Contact */}
          <div className="flex flex-col gap-4 items-center">
            <p className="text-white text-2xl mb-2">Find us at:</p>
            <div className="flex gap-4">
              <Link href="https://twitter.com/hacknovate">
                <FaTwitter className="text-gray-500 transition-all text-3xl hover:text-blue-500 hover:scale-90" />
              </Link>
              <Link href="https://www.linkedin.com/company/hacknovate/about/">
                <FaLinkedin className="text-gray-500 transition-all text-3xl hover:text-indigo-400 hover:scale-90" />
              </Link>
              <Link href="https://discord.gg/aHSFWKjb">
                <FaDiscord className="text-gray-500 transition-all text-3xl hover:text-indigo-600 hover:scale-90" />
              </Link>
              <Link href="https://www.instagram.com/hacknovate.abesit/">
                <FaInstagram className="text-gray-500 transition-all text-3xl hover:text-pink-600 hover:scale-90" />
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <MdAlternateEmail className="text-white" />
              <p className="text-white text-sm">hacknovate@abesit.edu.in</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-6" />

        {/* Footer Bottom */}
        <div className="mt-6">
          <p className="text-sm text-white text-center md:text-left">
            © Copyright ABESIT. All Right Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
