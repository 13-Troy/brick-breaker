import React, { FC } from "react";

import { H1St, H2St, H3St, H4St } from "./style"

/**
* В компонент передаются пропсы:
* h - число, от 1 до 4, определяющее уровень заголовка
* value - строка, опредлеяющая значение заголовка
*/

interface TitleProps {
    h: number;
    value: string;
}

const Title: FC<TitleProps> = ({value, h}) => {

    return (<>
        {h===1 && <H1St>{value}</H1St>}
        {h===2 && <H2St>{value}</H2St>}
        {h===3 && <H3St>{value}</H3St>}
        {h===4 && <H4St>{value}</H4St>}
    </>)
}

export default Title;
