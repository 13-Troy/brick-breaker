
import { WrapSwithSt } from './style';
import React from "react";
import Button from '../../components/Button';

interface ToggleThemeProps {
  onChange?: (() => void) | any;
  value?: boolean;
}

const ToggleTheme = (props: ToggleThemeProps) => {
  const { onChange, value } = props;
  return (
    <WrapSwithSt>
      <Button onClick={onChange}>
        {value ? 'светлая тема' : 'темная тема'}
      </Button>
    </WrapSwithSt>
  )
}

export default ToggleTheme;
