import React, { FC } from "react";

import { ASt } from "./style";

interface ButtonProps {
    value: string;
    link: string;
}

const Link: FC<ButtonProps> = ({ value, link }) => {
    return (<>
        <ASt to={link}>{value}</ASt>
    </>)
}

export default Link;
