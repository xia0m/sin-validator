import { describe, it, expect } from 'vitest';
import { validateSIN } from './validate-sin';

describe('validateSIN', () => {
  it('should validate a correct SIN', async () => {
    const validSIN = '123123234';
    await expect(validateSIN(validSIN)).resolves.toBe('Success! SIN is valid.');
  });

  it('should reject for an invalid SIN', async () => {
    const invalidSIN = '123456789';
    await expect(validateSIN(invalidSIN)).rejects.toBe('SIN is not valid.');
  });

  it('should reject when SIN length is not 9 digits', async () => {
    const shortSIN = '12345678'; // 8 digits
    await expect(validateSIN(shortSIN)).rejects.toBe(
      'Error! SIN should be 9 digits.'
    );

    const longSIN = '1234567890'; // 10 digits
    await expect(validateSIN(longSIN)).rejects.toBe(
      'Error! SIN should be 9 digits.'
    );
  });
});
