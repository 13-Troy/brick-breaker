import { render, screen, fireEvent, act } from '@testing-library/react';
import Input from '../Input';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../styles/variables';

import React from 'react';

describe('Input', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <Input name={'email'} type={'email'} placeholder={'почта'} />
      </ThemeProvider>
    );
  });

  it('should render with placeholder', () => {
    const placeholder = 'test';
    render(
      <ThemeProvider theme={baseTheme}>
        <Input name={'email'} type={'email'} placeholder={placeholder} />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('typing into email input', () => {
    const input = render(
      <ThemeProvider theme={baseTheme}>
        <Input name={'email'} type={'email'} placeholder={'test'} />
      </ThemeProvider>
    );

    act(() => {
      fireEvent.change(input.getByPlaceholderText('test'), {
        target: { value: 'test@test.com' },
      });
    });

    expect(input.getByPlaceholderText('test')).toHaveValue('test@test.com');
  });
});
