import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { H1, HeaderS } from "./HeaderStyled";

const Header = () => {
  return (
      <HeaderS>
        <H1>
          <FaLightbulb size={25} />
          Keeper App
        </H1>
      </HeaderS>
  );
};

export default Header;
