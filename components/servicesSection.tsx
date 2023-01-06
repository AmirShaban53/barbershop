import { FC, useState } from "react";
import { Container } from "./layout";

const ServicesSection: FC = () => {
  const [services, servicesList] = useState(servicesData);
  return (
    <section
      className="mb-24 pt-16 pb-8  bg-gradient-to-r from-zinc-900"
      id="services"
    >
      <Container>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold">
            our <span className="text-orange-700">services.</span>
          </p>
          <p className="text-2xl italic">So what do we have to offer?</p>
        </div>
        <div className="grid grid-cols-6 gap-12 mb-6">
          {services.map((service, index) => {
            return <Service key={index} {...service} />;
          })}
        </div>
      </Container>
    </section>
  );
};

const Service: FC<{
  title: string;
  pricing: number;
  detail: string;
}> = ({ title, pricing, detail }) => {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2 py-6 border-b group hover:border-orange-700 duration-500 transition-all cursor-pointer">
      <p className="text-4xl font-bold italic mb-1 duration-500 group-hover:text-orange-700">
        {title}
      </p>
      <p className="italic mb-4">${pricing}</p>
      <p>{detail}</p>
    </div>
  );
};

const servicesData = [
  {
    title: "haircut",
    pricing: 35,
    detail:
      "Consultation, cut, blow dry, and style with permium products. Includes a complimentary hot lather neck shave with straight razor.",
  },
  {
    title: "beard trim",
    pricing: 25,
    detail:
      "Consultation, trim, straight razor edging, and hot & cold towel combo. Finished with after-shave, lotion and your choice of beard oil or balm.",
  },
  {
    title: "buzz",
    pricing: 15,
    detail:
      "Ask for a buzz cut if you are looking for a no nonesense low maintenance look at a uniform length as close as you'd like.",
  },
  {
    title: "Skin Fade",
    pricing: 45,
    detail:
      "Also known as the bald fade or a zero fade, the service requires a little exta time. Hair is faded from skin length to your desired length on top.",
  },
  {
    title: "shave",
    pricing: 40,
    detail:
      "Experience a traditional hot towel shave with a straight razor and warm shaving cream that will leave your face smooth to the touch.",
  },
  {
    title: "Buzz & Beard Trim",
    pricing: 50,
    detail: "Combination of single length buzz cut and beard/mustache shaping.",
  },
];

export default ServicesSection;
