import { FC } from "react";
import { Container } from "./layout";
import {
  Facebook,
  Twitter,
  Instagram,
  LocationOn,
  Email,
  Phone,
} from "@mui/icons-material";

const Footer: FC = () => {
  return (
    <footer className="bg-zinc-900 text-white ">
      <Container>
        <div className="py-6 grid grid-cols-6">
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <p className="text-2xl font-bold mb-4 text-orange-700">
              navigation
            </p>

            <ul className="font-bold capitalize">
              <li className="my-2 p-2 hover:text-orange-700">
                <a href="#story">our story</a>
              </li>
              <li className="my-2 p-2 hover:text-orange-700">
                <a href="#services">services</a>
              </li>
              <li className="my-2 p-2 hover:text-orange-700">
                <a href="#barbers">barbers</a>
              </li>
              <li className="my-2 p-2 hover:text-orange-700">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <p className="text-2xl font-bold mb-4 text-orange-700">contact</p>
            <p>
            Schedule an appointment with us for find <br /> us at out location any day of the week.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <p className="text-2xl font-bold mb-4 text-orange-700">contact</p>
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
      </Container>
    </footer>
  );
};

export default Footer;
