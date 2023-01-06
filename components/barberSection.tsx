import { FC, useState } from "react";
import { Container } from "./layout";
import Image from "next/image";

const BarberSection = () => {
  const [barberList, setBarberList] = useState(barberData);
  return (
    <section className="mb-24 pt-16" id="barbers">
      <Container>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold">
            Our <span className="text-orange-700">barbers.</span>
          </p>
          <p className="text-2xl italic">Meet the people running the shop.</p>
        </div>
        <div className="grid grid-cols-6 gap-10">
          {barberList.map((barber, index) => {
            return <BarberCard key={index} {...barber} />;
          })}
        </div>
      </Container>
    </section>
  );
};

const BarberCard: FC<{ name: string; src: string }> = ({ name, src }) => {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2 mx-auto relative rounded-full">
      <div className="relative h-72 w-72 rounded-full overflow-hidden cursor-pointer">
        <Image
          src={src}
          alt="the barber"
          fill
          className=""
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="overlay rounded-full absolute w-full h-full bg-orange-800 bg-opacity-0 hover:bg-opacity-25 transition-all duration-300 group">
          <p className="text-2xl absolute -bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2   group-hover:bottom-1/2 transition-all duration-700 font-bold ">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

const barberData = [
  {
    name: "James",
    src: "/images/barbers/barber1.jpg",
  },
  {
    name: "Adams",
    src: "/images/barbers/barber3.jpg",
  },
  {
    name: "Garry",
    src: "/images/barbers/barber2.jpg",
  },
  {
    name: "Mike",
    src: "/images/barbers/barber4.jpg",
  },
  {
    name: "Jimmy",
    src: "/images/barbers/barber5.jpg",
  },
  {
    name: "Griffin",
    src: "/images/barbers/barber6.jpg",
  },
];

export default BarberSection;
