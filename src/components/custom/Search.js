import React from 'react';
import { FiSearch } from 'react-icons/fi';
import CustomImage from '../custom-image/custom-image';
import { SEARCH_ICON } from '@/config/image-config';

const Search = ({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
  onClear = null,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute search_icon flex items-center pl-3 pointer-events-none">
        <CustomImage src={SEARCH_ICON} alt="Search" title="Search" height={16} width={16} />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full  py-2 pl-10 pr-4 roboto_regular  bg-white search_bg_color  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={placeholder}
        {...props}
      />
      {value && onClear && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={onClear}
        >
          <svg
            className="w-4 h-4 text-gray-400 hover:text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Search; 