import { FC, useState } from "react";
import { Container } from "./layout";
import Image from "next/image";

const BarberSection = () => {
  const [barberList, setBarberList] = useState(barberData);
  return (
    <section className="mb-24 pt-16" id="barbers">
      <Container>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold">Our barbers</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="grid grid-cols-6 gap-10">
          {barberList.map((barber) => {
            return <BarberCard key={barber.id} {...barber} />;
          })}
        </div>
      </Container>
    </section>
  );
};

const BarberCard: FC<{ id: number; name: string; src: string }> = ({
  name,
  src,
}) => {
  return (
    <div className="col-span-2 mx-auto relative">
      <div className="relative h-72 w-72 rounded-full overflow-hidden">
        <Image
          src={src}
          alt="the barber"
          fill
          className=""
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="overlay rounded-full absolute w-full h-full bg-black bg-opacity-0 hover:bg-opacity-25 transition-all duration-300 group">
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
    id: 1,
    name: "James",
    src: "/images/barbers/barber1.jpg",
  },
  {
    id: 3,
    name: "Adams",
    src: "/images/barbers/barber3.jpg",
  },
  {
    id: 2,
    name: "Garry",
    src: "/images/barbers/barber2.jpg",
  },
  {
    id: 4,
    name: "Mike",
    src: "/images/barbers/barber4.jpg",
  },
  {
    id: 5,
    name: "Jimmy",
    src: "/images/barbers/barber5.jpg",
  },
  {
    id: 6,
    name: "Griffin",
    src: "/images/barbers/barber6.jpg",
  },
];

export default BarberSection;
