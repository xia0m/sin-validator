import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import SINInput from './sin-input';
import * as validateSIN from '../utils/validate-sin';

describe('SINInput Component', () => {
  it('should render input field', () => {
    render(<SINInput />);

    const input = screen.getByPlaceholderText('123 456 789');
    expect(input).toBeInTheDocument();
  });

  it('should render validate button', () => {
    render(<SINInput />);

    const validateButton = screen.getByRole('button', { name: /validate/i });
    expect(validateButton).toBeInTheDocument();
  });

  it('should format SIN correctly as user types', () => {
    render(<SINInput />);

    const input = screen.getByPlaceholderText('123 456 789');

    fireEvent.change(input, { target: { value: '123456789' } });

    expect(input).toHaveValue('123 456 789');
  });

  it('should call validateSIN function', async () => {
    render(<SINInput />);
    vi.spyOn(validateSIN, 'validateSIN');
    const validateButton = screen.getByRole('button', { name: /validate/i });
    await userEvent.click(validateButton);

    await waitFor(() => {
      expect(validateSIN.validateSIN).toBeCalledTimes(1);
    });
  });
  it(`should display error message 'Error! SIN should be 9 digits' when input is empty`, async () => {
    render(<SINInput />);
    const validateButton = screen.getByRole('button', { name: /validate/i });
    await userEvent.click(validateButton);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByRole('alert')).toHaveTextContent(
        'Error! SIN should be 9 digits.'
      );
    });
  });

  it(`should display success message 'Success! SIN is valid.' when input SIN is valid`, async () => {
    render(<SINInput />);
    const input = screen.getByPlaceholderText('123 456 789');

    fireEvent.change(input, { target: { value: '123123234' } });
    const validateButton = screen.getByRole('button', { name: /validate/i });
    await userEvent.click(validateButton);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByRole('alert')).toHaveTextContent(
        'Success! SIN is valid.'
      );
    });
  });

  it(`should display error message 'SIN is not valid.' when input SIN is not valid`, async () => {
    render(<SINInput />);
    const input = screen.getByPlaceholderText('123 456 789');

    fireEvent.change(input, { target: { value: '123123233' } });
    const validateButton = screen.getByRole('button', { name: /validate/i });
    await userEvent.click(validateButton);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByRole('alert')).toHaveTextContent('SIN is not valid.');
    });
  });
});
