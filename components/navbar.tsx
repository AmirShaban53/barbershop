import { FC } from "react";
import { Container } from "./layout";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="fixed w-full z-20 text-white bg-black bg-opacity-20">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="text-2xl uppercase font-bold">title</p>
          </div>
          <div>
            <ul className="flex font-bold uppercase">
              <li className="mx-6 py-1 px-2">
                <a href={"#story"}>our story</a>
              </li>
              <li className="mx-6 py-1 px-2">
                <a href={"#services"}>services</a>
              </li>
              <li className="mx-6 py-1 px-2">
                <a href={"#barbers"}>barbers</a>
              </li>
              <li className="mx-6 py-1 px-2">
                <a href={"#contact"}>contact</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
