import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SinValidatorCard from './sin-validator-card';

describe('SIN Validator Card Component', () => {
  it('should render SIN Validator as heading 1', () => {
    render(<SinValidatorCard />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'SIN Validator' })
    ).toBeDefined();
  });

  it('should render Enter SIN below as heading 2', () => {
    render(<SinValidatorCard />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'Enter SIN below' })
    ).toBeDefined();
  });
});
