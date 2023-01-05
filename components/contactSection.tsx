import { FC } from "react";
import { Container } from "./layout";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  LocationOn,
  Email,
  Phone,
} from "@mui/icons-material";

const ContactSection: FC = () => {
  return (
    <section className="pb-8 pt-16" id="contact">
      <Container>
        <p className="text-4xl mb-6 uppercase font-bold">book an appointment</p>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-6 ">
            <p className="text-xl mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis atque sed modi nemo, voluptas ab accusantium quo
              impedit reprehenderit ullam aut, suscipit saepe minima numquam
              eaque?
            </p>
            <div>
              <button className="border text-2xl px-4 py-2 rounded-lg bg-black text-white">
                book now
              </button>
            </div>
          </div>
          <div className="col-span-6 ">
            <div className="mb-6">
              <p className="text-2xl font-bold mb-4">contact</p>
              <p className="my-3">
                <Phone />: <span>+1 234 567 890</span>{" "}
              </p>
              <p className="my-3">
                <Email />: <span>example@gmail.com</span>{" "}
              </p>
              <p className="my-3">
                <LocationOn />: <span>NYc brooklyn</span>
              </p>
              <div className="flex my-6">
                <Facebook className="mr-2" />
                <Twitter className="mx-2" />
                <Instagram className="mx-2" />
              </div>
            </div>
          </div>
        </div>
        <div className=" py-6">
          <div className="relative h-96  mx-auto overflow-hidden ">
            <Image
              src="/images/map.png"
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
