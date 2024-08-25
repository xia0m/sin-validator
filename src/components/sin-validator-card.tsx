import SINInput from '../components/sin-input';

export default function SinValidatorCard() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-base-200'>
      <div className='card w-full max-w-md bg-base-100 shadow-xl p-8'>
        <h1 className='text-2xl font-bold mb-2 text-center'>SIN Validator</h1>
        <h2 className='text-gray-600 mb-6 text-center'>Enter SIN below</h2>

        <SINInput />
      </div>
    </div>
  );
}
