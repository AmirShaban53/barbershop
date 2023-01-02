import { FC } from "react";
import { Container } from "./layout";

const Navbar: FC = () => {
  return (
    <div className="fixed w-full z-20 text-white d">
      <Container>
        <p>this is the navbar</p>
      </Container>
    </div>
  );
};

export default Navbar;
