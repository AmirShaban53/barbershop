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
        <div className="story container flex scroll-rail" ref={ScrollElement}>
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
    <div className=" shrink-0 w-5/6 scroll-child flex h-80 mx-8 ">
      <div className="relative basis-1/2">
        <Image
          src={props.src}
          fill
          alt="this is the opening"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="basis-1/2 pl-4 border my-4">
        <p className="font-bold text-3xl mb-4">{props.title}</p>
        <p className="text-lg">{props.content}</p>
      </div>
    </div>
  );
};
export default StorySection;

const storyData = [
  {
    src: "/place holder/1024.webp",
    title: "Lorem, ipsum.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur autem iusto necessitatibus illo exercitationem! Voluptatum tempore nesciunt, voluptas fugit dignissimos aspernatur illum quia sit labore officia eius odit eveniet ea! - first",
  },
  {
    src: "/place holder/1024.webp",
    title: "Lorem, ipsum.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur autem iusto necessitatibus illo exercitationem! Voluptatum tempore nesciunt, voluptas fugit dignissimos aspernatur illum quia sit labore officia eius odit eveniet ea!",
  },
  {
    src: "/place holder/1024.webp",
    title: "Lorem, ipsum.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur autem iusto necessitatibus illo exercitationem! Voluptatum tempore nesciunt, voluptas fugit dignissimos aspernatur illum quia sit labore officia eius odit eveniet ea!",
  },
  {
    src: "/place holder/1024.webp",
    title: "Lorem, ipsum.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur autem iusto necessitatibus illo exercitationem! Voluptatum tempore nesciunt, voluptas fugit dignissimos aspernatur illum quia sit labore officia eius odit eveniet ea! - last",
  },
  {
    src: "/place holder/1024.webp",
    title: "Lorem, ipsum.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur autem iusto necessitatibus illo exercitationem! Voluptatum tempore nesciunt, voluptas fugit dignissimos aspernatur illum quia sit labore officia eius odit eveniet ea! - last",
  },
];
