import React from "react";

import Title from "../../components/Title";
import Button from "../../components/Button";

import { HardPopUpSt } from "./style"


const Home = () => {
  return (<>
    <HardPopUpSt>
        <form action="">
            <Title value={"вход"} h={2} />
            <Button value={"вход"} fullWidth />
        </form>
    </HardPopUpSt>
  </>)
}

export default Home;
