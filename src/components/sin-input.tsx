'use client';

import React, { useState } from 'react';
import { validateSIN } from '@/utils/validate-sin';
import { ErrorIcon, LoadingIcon, SuccessIcon } from './icons';

const SINInput: React.FC = () => {
  const [sin, setSin] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [validateMessage, setValidateMessage] = useState('');

  const maskSIN = (value: string) => {
    // Remove all non-digit characters
    const nums = value.replace(/\D/g, '');

    // Insert blank space after the first 3 and 6 digits
    if (nums.length <= 3) {
      return nums;
    } else if (nums.length <= 6) {
      return `${nums.slice(0, 3)} ${nums.slice(3)}`;
    } else {
      return `${nums.slice(0, 3)} ${nums.slice(3, 6)} ${nums.slice(6, 9)}`;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = maskSIN(event.target.value);
    setSin(maskedValue);
  };

  const checkSin = async () => {
    setIsValidating(true);
    try {
      const result = await validateSIN(sin.replace(/\s/g, ''));
      setIsValid(true);
      setIsValidating(false);
      setValidateMessage(result);
    } catch (error) {
      setIsValid(false);
      setIsValidating(false);
      setValidateMessage(error as string);
    }
  };

  return (
    <div>
      <label className='input input-bordered flex items-center gap-2'>
        <input
          type='text'
          value={sin}
          onChange={handleChange}
          placeholder='123 456 789'
          className='grow'
          maxLength={11}
        />
        {isValidating && <LoadingIcon />}
        {isValid !== null &&
          !isValidating &&
          (isValid ? <SuccessIcon /> : <ErrorIcon />)}
      </label>

      <button className='btn btn-primary w-full mt-6' onClick={checkSin}>
        Validate
      </button>
      <div
        className={`mt-4 text-lg text-center h-6 ${
          isValid ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {validateMessage}
      </div>
    </div>
  );
};

export default SINInput;
