import React, { useState } from "react";
import Image from "next/image";
import Heading from "./Heading";
import { Anton } from "next/font/google";
import { CommunityPartnerR1 } from "@/data/communityPartner";
import styled, { keyframes, css } from "styled-components";

const anton = Anton({
  subsets: ["latin-ext"],
  weight: ["400"],
});

export default function CommPartners() {
  return (
    <div className="w-11/12 mx-auto">
      <Heading>Community Partners</Heading>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {CommunityPartnerR1.map((item, index) => (
              <ImageGroup key={index}>
                <ImageContainer>
                  <img className="" src={item.img} alt="err" />
                </ImageContainer>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {CommunityPartnerR1.map((item, index) => (
              <ImageGroup key={index}>
                <ImageContainer>
                  <img className="" src={item.img} alt="err" />
                </ImageContainer>
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 300px;
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
const ImageContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  height: 150px;
  padding: 10px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 60px; /* Change height to 50px on small screens */
    border-radius: 2px;  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
