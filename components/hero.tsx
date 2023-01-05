import { FC } from "react";
import { Container } from "./layout";
import Image from "next/image";
import bgImage from "../public/images/topview.jpg";
const Hero: FC = () => {
  return (
    <div className="h-screen relative mb-8">
      <div className="absolute h-full w-full z-0">
        <Image
          src="/images/topview.jpg"
          alt={"this is the hair man"}
          fill
          className=""
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-zinc-800">

        </div>
      </div>
      <div className="h-full relative flex items-center text-white z-10">
        <Container>
          <p className="text-6xl font-bold mb-2">Look and feel <br/> your atmost <span className="text-orange-800">BEST.</span></p>
          <p className="text-2xl italic mb-6">Get a haircut that leaves a lasting impression.</p>
          <button className="bg-orange-800 text-2xl px-4 py-2 rounded-md mr-4 capitalize font-bold">book now</button>
          <button className="border-2 text-2xl px-4 py-2 rounded-md mr-2 font-bold">our services</button>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
