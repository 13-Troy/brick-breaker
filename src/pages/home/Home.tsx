import React from "react";

import Title from "../../components/Title";

import { HardPopUpSt } from "./style"

const Home = () => {
  return (<>
    <HardPopUpSt>
        <Title value={"вход"} h={2} />
        <Title value={"вход"} h={3} />
    </HardPopUpSt>
  </>)
}

export default Home;
