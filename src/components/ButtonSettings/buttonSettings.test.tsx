import { render, fireEvent, act } from '@testing-library/react';
import ButtonSettings from '../ButtonSettings';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../styles/variables';

import React from 'react';

describe('ButtonSettings', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <ButtonSettings>Test</ButtonSettings>
      </ThemeProvider>
    );
  });

  it('should render label', () => {
    const text = 'Button';
    const button = render(
      <ThemeProvider theme={baseTheme}>
        <ButtonSettings>{text}</ButtonSettings>
      </ThemeProvider>
    );

    expect(button.getByText(text)).toBeInTheDocument();
  });

  it('should call callback on click', () => {
    const callback = jest.fn();

    const button = render(
      <ThemeProvider theme={baseTheme}>
        <ButtonSettings onClick={callback}>Test</ButtonSettings>
      </ThemeProvider>
    );

    act(() => {
      fireEvent.click(button.getByText('Test'));
    });

    expect(callback).toHaveBeenCalled();
  });
});
