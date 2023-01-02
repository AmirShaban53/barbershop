import { FC } from "react";
import { Container } from "./layout";
import Image from "next/image";

const ContactSection: FC = () => {
  return (
    <section className= "mb-8">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-6 ">
            <p className="text-4xl">book an appointment</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis atque sed modi nemo, voluptas ab accusantium quo
              impedit reprehenderit ullam aut, suscipit saepe minima numquam
              eaque?
            </p>
            <div>
              <button>book now</button>
            </div>
          </div>
          <div className="col-span-6 ">
            <div className="">
              <p className="text-2xl">contact</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                deleniti temporibus eos quas, quis vel voluptatum.
              </p>
            </div>
            <div className="">
              <p className="text-2xl">address info</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                repudiandae consequatur ab molestias sit saepe!
              </p>
            </div>
          </div>
        </div>
        <div className="p-6">

        <div className="relative h-96 w-96 mx-auto overflow-hidden ">
          <Image
            src="/place holder/720.jpg"
            alt="geographic location"
            fill
            className="z-10"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        </div>

      </Container>
    </section>
  );
};

export default ContactSection;
