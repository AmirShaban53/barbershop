import { FC, useState } from "react";
import { Container } from "./layout";
import Image from "next/image";
import {motion} from 'framer-motion'

const ClientSection = () => {
  const [clientList, setClientList] = useState(clientData);
  return (
    <section className="mb-24 pt-16" id="clients">
      <Container>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold">Our <span className="text-orange-700">clients.</span></p>
          <p className="text-2xl italic">what our clients have to say.</p>
        </div>
        <div className="grid grid-cols-6">
          {clientList.map((client, index) => {
            return <ClientCard key={index} {...client} />;
          })}
        </div>
      </Container>
    </section>
  );
};

const ClientCard: FC<{
  name: string;
  comment: string;
  src: string;
}> = ({ name, src, comment }) => {
  return (
    <div className="col-span-6 lg:col-span-2">
      <div className="relative h-80  overflow-hidden cursor-pointer">
        <Image
          src={src}
          alt="the client"
          fill
          className=""
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="overlay  absolute w-full h-full bg-orange-800 bg-opacity-0 hover:bg-opacity-25 transition-all duration-300 group">
          <p className="text-xl text-center absolute -bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2   group-hover:bottom-1/2 transition-all duration-700 italic ">
            {comment}
            <br />
            <span className="font-bold mt-6">- {name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const clientData = [
  {
    name: `Emma`,
    comment: `greate customer service`,
    src: "/images/clients/client1.jpg",
  },
  {
    name: "Hansen",
    comment: "Always trust them for a greate fade",
    src: "/images/clients/client3.jpg",
  },
  {
    name: "Aron",
    comment: "Best place to trim my beard",
    src: "/images/clients/client2.jpg",
  },
];

export default ClientSection;
