import { FC } from "react";
import { Container } from "./layout";
import Image from "next/image";
import { motion } from "framer-motion";
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
        <div className="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-zinc-800"></div>
      </div>
      <div className="h-full relative flex items-center text-white z-10">
        <Container>
          <p className="text-4xl md:text-6xl font-bold mb-2">
            Look and feel <br /> your atmost{" "}
            <span className="text-orange-700">BEST.</span>
          </p>
          <p className="text-xl md:text-2xl italic mb-6">
            Get a haircut that leaves a lasting impression.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-orange-700 to-orange-400 text-2xl px-4 py-2 rounded-md mr-4 capitalize font-bold"
          >
            book now
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="border-2 text-2xl px-4 py-2 rounded-md mr-2 font-bold"
            href="#services"
          >
            our services
          </motion.a>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
