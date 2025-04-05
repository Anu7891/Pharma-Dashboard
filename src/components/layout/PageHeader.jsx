'use client';

import { FiSettings } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';

export default function PageHeader({ title, children }) {
  return (
    <div className="flex justify-between items-center bg-white px-[40px] py-[20px]">
      <h1 className="text-xl font-semibold roboto_regular">{title}</h1>
      <div className="flex items-center gap-4">
        {children}
        <button className="text-gray-600 hover:text-gray-800">
          <FiSettings className="w-5 h-5" />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <IoMdNotificationsOutline className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-medium">
          SI
        </div>
      </div>
    </div>
  );
} 