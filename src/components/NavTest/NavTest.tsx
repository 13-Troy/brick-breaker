import React from "react";
import { Link } from "react-router-dom";

import { NavTestWrapper } from "./style";

const NavTest = () => {
  return (
    <>
      <NavTestWrapper>
        <Link to={"/"}>home</Link>
        <br />
        <Link to={"/about"}>about</Link>
        <br />
        <Link to={"/registration"}>registration</Link>
        <br />
        <Link to={"/profile"}>profile</Link>
        <br />
        <Link to={"/forum"}>forum</Link>
        <br />
        <Link to={"/records"}>records</Link>
        <br />
        <Link to={"/game"}>game</Link>
      </NavTestWrapper>
    </>
  );
};

export default NavTest;
