
import { WrapSwithSt } from './style';
import React from "react";
import Button from '../../components/Button';
import MainContainer from '../../components/MainContainer';
interface ToggleThemeProps {
  onChange?: (() => void) | any;
  value?: boolean;
}

const ToggleTheme = (props: ToggleThemeProps) => {
  const { onChange, value } = props;
  return (
    <MainContainer>
      <WrapSwithSt>
        <Button onClick={onChange}>
          {value ? 'светлая тема' : 'темная тема'}
        </Button>
      </WrapSwithSt>
    </MainContainer>
  )
}

export default ToggleTheme;
