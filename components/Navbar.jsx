import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const navbarItems = [
  {
    id: 1,
    name: "About",
    link: "/#about",
  },
  {
    id: 2,
    name: "Contact Us",
    link: "/contact",
  },
  {
    id: 3,
    name: "Sponsors",
    link: "/#sponsors",
  },
  {
    id: 4,
    name: "Team",
    link: "/team",
  },
  {
    id: 4,
    name: "Events",
    link: "/events",
  },
  {
    id: 5,
    name: "Mentor",
    link: "/mentor",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const inactiveLink =
    "px-2 py-1 font-semibold transition ease-in-out duration-200 relative group max-w-fit hover:bg-gradient-to-r hover:from-franklin-green hover:to-michael-blue hover:bg-clip-text hover:text-transparent";
  const activeLink =
    "px-2 py-1 font-semibold transition ease-in-out duration-200 relative group max-w-fit bg-gradient-to-r from-michael-blue to-trevor-orange bg-clip-text text-transparent border-b-2 border-b-[#488F21]";
  return (
    <>
      <div
        className={`bg-black text-white py-3 px-4 flex justify-between md:justify-between items-center flex-wrap sticky md:fixed w-full z-50 bg-opacity-50 top-0 backdrop-blur-lg ${roboto.className}`}
      >
        <Link className="flex items-center justify-center" href={`/`}>
          <Image src="/logo.png" width={200} height={50} />
        </Link>

        {/* Menu button for mobile devices */}
        <div className="md:hidden">
          <button
            className="mobile-menu-button transform hover:scale-105 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`w-full md:w-auto ${isOpen ? "flex" : "hidden"
            } md:flex md:items-center md:gap-6 mx-2 md:ml-4 hidden`}
        >
          {navbarItems.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className={
                pathname.includes(item.link) ? activeLink : inactiveLink
              }
            >
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-franklin-green to-michael-blue rounded-full transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="mailto:hacknovate@abesit.edu.in"
            className="text-center mx-auto mt-2 md:mx-0 md:flex hidden"
          >
            <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ABEDAB_0%,#FFA357_50%,#65B4D4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Sponsor Us
              </span>
            </button>
          </Link>
        </div>

        {/* mobile menu items */}
        <div
          className={`${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            } absolute top-full text-left left-0 right-0 md:hidden transition-all duration-300 transform origin-top ease-in-out bg-black bg-opacity-90`}
        >
          {navbarItems.map((item) => (
            <div
              key={item.id}
              className={
                item.id === 1
                  ? "border-y-[1px] pl-10 py-2"
                  : " border-b-[1px] pl-10 py-2"
              }
            >
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
          <div className="py-3 flex justify-center">
            <Link
              href="mailto:hacknovate@abesit.edu.in"
              className="text-center mx-auto mt-2 md:mx-0"
            >
              <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ABEDAB_0%,#FFA357_50%,#65B4D4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Sponsor Us
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="md:flex hidden flex-row items-center justify-center gap-2">
          {/* <img src="/aktu.png" className="w-[54px] object-contain" />
          <img src="/nba.png" className="w-[54px] object-contain" />
          <img src="/iic.png" className="w-[54px] object-contain" /> */}
          <Link href="https://abesit.in" target="_blank">
            <Image src="/abesit.svg" width={135} height={50} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
