import { useState } from 'react';

export const useModal = (initialValue = false) => {
  const [isShown, setIsShown] = useState(initialValue);
  const toggle = () => setIsShown(!isShown);
  return {
    isShown,
    toggle,
  };
};
