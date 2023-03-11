import { FC, useState } from "react";
import { Container } from "./layout";
import Link from "next/link";

const Navbar: FC = () => {
  const [activeMobile, setActiveMobile] = useState(false);

  const handleTriggerMobile = () => {
    setActiveMobile((prev) => {
      return !prev;
    });
  };
  const handleCloseMenu = () => {
    setActiveMobile(true);
  };
  return (
    <div className="fixed w-full z-20 text-white bg-black bg-opacity-20 md:backdrop-blur-sm">
      <Container>
        <div className="flex justify-between items-center py-4 relative">
          <div>
            <p className="text-2xl uppercase font-bold">
              <a href="#">hotcut</a>
            </p>
          </div>
          <div>
            <ul
              className={`${activeMobile ? "hidden" : "block"} 
              absolute top-16 -left-2 w-screen h-screen bg-black bg-opacity-20 font-bold uppercase backdrop-blur text-center md:relative md:flex md:h-fit md:w-fit md:top-0 md:right-0 md:bg-opacity-0 md:backdrop-blur-0`}
            >
              <li className="mx-6 py-1 px-2" onClick={handleCloseMenu}>
                <a href={"#story"}>our story</a>
              </li>
              <li className="mx-6 py-1 px-2" onClick={handleCloseMenu}>
                <a href={"#services"}>services</a>
              </li>
              <li className="mx-6 py-1 px-2" onClick={handleCloseMenu}>
                <a href={"#barbers"}>barbers</a>
              </li>
              <li className="mx-6 py-1 px-2" onClick={handleCloseMenu}>
                <a href={"#contact"}>contact</a>
              </li>
            </ul>
          </div>
          <div onClick={handleTriggerMobile} className={`block md:hidden`}>
            menu
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
