import { FC, ReactNode, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "./layout";

const StorySection: FC = () => {
  const [stories, setStories] = useState(storyData);
  const ScrollElement = useRef<HTMLDivElement>(null);

  const handleCLickBtn = (index: number) => {
    if (ScrollElement.current == null || ScrollElement.current == undefined)
      return;

    const maxValue = stories.length - 1;
    const percentage = Math.ceil((index / maxValue) * 100);
    const scrollWidth =
      ScrollElement.current.scrollWidth - ScrollElement.current.clientWidth;
    const scrollPosition = (percentage * scrollWidth) / 100;
    ScrollElement.current.scrollLeft = scrollPosition;
  };

  return (
    <section className="mb-24 pt-16 pb-8" id="story">
      <Container>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold capitalize">
            our <span className="text-orange-700">story</span>
          </p>
          <p className="text-2xl italic">how it all began.</p>
        </div>
        <div className=" flex scroll-rail" ref={ScrollElement}>
          {stories.map((story, index) => {
            return (
              <StoryCard
                key={index}
                src={story.src}
                title={story.title}
                content={story.content}
              />
            );
          })}
        </div>
        <div className="flex my-4 justify-center">
          {stories.map((story, index) => {
            return (
              <div
                key={index}
                className="h-3 w-3 bg-white mx-2 rounded-full"
                onClick={() => handleCLickBtn(index)}
              ></div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const StoryCard: FC<{ src: string; title: string; content: string }> = (
  props
) => {
  return (
    <div className=" shrink-0 w-5/6 scroll-child md:flex mx-8 ">
      <div className="relative h-56 md:h-72 basis-1/2">
        <Image
          src={props.src}
          fill
          alt="this is the opening"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="basis-1/2 pl-4 py-8 border my-auto">
        <p className="font-bold text-3xl mb-4">{props.title}</p>
        <p className="text-lg">{props.content}</p>
      </div>
    </div>
  );
};
export default StorySection;

const storyData = [
  {
    src: "/images/barbers/founding.jpg",
    title: "Founded in 2007",
    content:
      "Hotcut was founded in the year 2007 as a small family sallon, with nothing more than one seat, single machine and the passion and drive to build a successful and generational barbershop of the community.",
  },
  {
    src: "/images/barbers/founder.jpg",
    title: "Meet our founder",
    content:
      "Marcus Ederson was the first barber at hotcut and the founder as well. He laid the ground work that has led us this far. He started the barbershop inorder to help the community by provide a service. He retired in 2020",
  },
  {
    src: "/images/barbers/sallon_stands.jpg",
    title: "Our Expansion",
    content:
      "From nothing but a single seat sallon, we now expanded to a fully featured and staff barbershop. Able to take care of more that 7 clients at a time.",
  },
  {
    src: "/images/barbers/trust.jpg",
    title: "Build trust.",
    content:
      "We try our best to build a trust and bond with each and everyone of our clients. We prioritize the clients needs and requests above all so that you can keep coming back.",
  },
  {
    src: "/images/barbers/youngbarber.jpg",
    title: "Giving to community",
    content:
      "We give back to the community by teaching youth skills needed to be a barber. We always welcome young ones who would like to earn a living. \'say hello the emily btw\'",
  },
];
