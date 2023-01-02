import { FC } from "react";
import { Container } from "./layout";
import Image from "next/image";

const BarberSection = () => {
  return (
    <section className="mb-8">
      <Container>
        <div className="text-center">
          <p className="text-4xl font-bold">Our barbers</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="grid grid-cols-6 gap-10">
            <BarberCard/>
            <BarberCard/>
            <BarberCard/>
        </div>
      </Container>
    </section>
  );
};

const BarberCard: FC = () => {
  return (
    <div className="col-span-2 mx-auto">
      <div className="relative h-72 w-72 rounded-t-full overflow-hidden">
        <Image
          src="/place holder/720.jpg"
          alt="the barber"
          fill
          className=""
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold">John Macnro</p>
      </div>
    </div>
  );
};

export default BarberSection;
