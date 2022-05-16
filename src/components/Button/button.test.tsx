import { render, fireEvent, act } from '@testing-library/react';
import Button from '../../components/Button';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../styles/variables';

import React from 'react';

describe('Button', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <Button fullWidth>Test</Button>
      </ThemeProvider>
    );
  });
  it('should render label', () => {
    const text = 'Button';
    const button = render(
      <ThemeProvider theme={baseTheme}>
        <Button>{text}</Button>
      </ThemeProvider>
    );

    expect(button.getByText(text)).toBeInTheDocument();
  });

  it('should render different button if fullWidth is passed', () => {
    const button1 = render(
      <ThemeProvider theme={baseTheme}>
        <Button fullWidth>Test</Button>
      </ThemeProvider>
    );

    const button2 = render(
      <ThemeProvider theme={baseTheme}>
        <Button>Test</Button>
      </ThemeProvider>
    );

    expect(button1.container.outerHTML).not.toEqual(
      button2.container.outerHTML
    );
  });

  it('should call callback on click', () => {
    const callback = jest.fn();

    const button = render(
      <ThemeProvider theme={baseTheme}>
        <Button fullWidth onClick={callback}>
          Test
        </Button>
      </ThemeProvider>
    );

    act(() => {
      fireEvent.click(button.getByText('Test'));
    });

    expect(callback).toHaveBeenCalled();
  });
});
