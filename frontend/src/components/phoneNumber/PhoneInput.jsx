import React, { useEffect, useRef } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const PhoneInput = ({ label, id, name, placeholder, value, onChange, onBlur, error }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const inputElement = inputRef.current;
    const iti = intlTelInput(inputElement, {
      separateDialCode: true,
      initialCountry: 'auto',
    });

    inputElement.addEventListener('countrychange', function () {
      // Trigger change event when the country code changes
      inputElement.dispatchEvent(new Event('change', { bubbles: true }));
    });

    // Update the value in the parent component state
    inputElement.addEventListener('change', function () {
      const formattedPhoneNumber = iti.getNumber();
      onChange({ target: { name, value: formattedPhoneNumber } });
    });

    // Get the country code dropdown element
    const countrySelect = inputElement.parentNode.querySelector('.iti__selected-flag');
    if (countrySelect) {
      // Apply Tailwind CSS classes to adjust the width of the country code dropdown
      countrySelect.classList.add('w-24'); // Adjust the width as needed
    }
  }, []);

  return (
    <div className="w-1/3">
      <label htmlFor={id} className="block text-sm font-medium text-black mb-4">
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="tel"
        className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className='text-sm text-error'>{error}</div>}
    </div>
  );
};

export default PhoneInput;
