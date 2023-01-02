import { FC } from "react";
import Image from "next/image";
import { Container } from "./layout";

const StorySection: FC = () => {
  return (
    <section className="d py-12">
      <Container>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold">our story</p>
          <p className="text-2xl italic">our story</p>
        </div>
        <div className="story container flex scroll-rail">
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
      </Container>
    </section>
  );
};

const StoryCard: FC = () => {
  return (
    <div className=" shrink-0 w-5/6 scroll-child flex h-80 mx-8 ">
      <div className="relative basis-1/2">
        <Image
          src="/place holder/1024.webp"
          fill
          alt="this is the opening"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="basis-1/2 pl-4 border my-4">
        <p className="font-bold text-3xl mb-4">Lorem, ipsum.</p>
        <p className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          autem iusto necessitatibus illo exercitationem! Voluptatum tempore
          nesciunt, voluptas fugit dignissimos aspernatur illum quia sit labore
          officia eius odit eveniet ea!
        </p>
      </div>
    </div>
  );
};
export default StorySection;
