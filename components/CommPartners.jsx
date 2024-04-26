import Heading from "./Heading";
import { Anton } from "next/font/google";
import { CommunityPartnerR1 } from "@/data/communityPartner";
import Marquee from "react-fast-marquee";

const anton = Anton({
  subsets: ["latin-ext"],
  weight: ["400"],
});

export default function CommPartners() {
  return (
    <div className="w-11/12 mx-auto">
      <Heading>Community Partners</Heading>
      <Marquee
        direction="left"
        autoFill={true}
       
        >
        {CommunityPartnerR1.map((partner, index) => (
          <div key={index}>
            <img
              src={partner.img}
              alt={partner.name}
              className="w-60 mx-auto object-contain"
            />
          </div>
        ))}
      </Marquee>

    </div>
  );
}
