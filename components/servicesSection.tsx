import { FC } from "react";
import { Container } from "./layout";

const ServicesSection: FC = () => {
  return (
    <section className="mb-24 pt-16 pb-8  bg-gradient-to-r from-zinc-900"  id="services">
      <Container>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold">our services</p>
          <p className="text-2xl italic">Lorem, ipsum dolor.</p>
        </div>
        <div className="grid grid-cols-6 gap-12 mb-6">
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </Container>
    </section>
  );
};

const Service: FC<{
  title?: string;
  pricing?: string;
  detail?: string;
}> = ({ title, pricing, detail }) => {
  return (
    <div className="col-span-2 py-6 border-b">
      <p className="text-4xl font-bold italic mb-1">haircut</p>
      <p className="italic mb-4">$21 - $35</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        provident magni! Temporibus voluptate rem facere?
      </p>
    </div>
  );
};

export default ServicesSection;
