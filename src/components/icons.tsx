export const SuccessIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    className='size-6 stroke-green-500'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
    />
  </svg>
);

export const LoadingIcon = () => (
  <span className='loading loading-spinner loading-sm text-accent'></span>
);

export const ErrorIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    className='size-6 stroke-orange-500'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
    />
  </svg>
);
