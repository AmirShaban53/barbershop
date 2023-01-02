import { FC } from "react";
import { Container } from "./layout";
import Image from "next/image";
import bgImage from "../public/place holder/1080.webp";

const bgImg = { backgroundImage: `url('/images/bgholder.jpg')` };
const Hero: FC = () => {
  return (
    <div className="h-screen relative mb-8">
      <div className="absolute h-full w-full -z-10">
        <Image
          src={bgImage}
          alt={"this is the hair man"}
          fill
          className=""
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute bottom-0 h-32 w-full gradient">

        </div>
      </div>
      <div className="h-full flex items-center text-white z-10">
        <Container>
          {/* <p className="text-6xl font-bold">Lorem, ipsum dolor.</p> */}
          {/* <p className="text-4xl italic">Lorem, ipsum dolor.</p> */}
        </Container>
      </div>
    </div>
  );
};

export default Hero;
