"use client";

export default function VendorsPage() {
  return (
    <div className="vendors-container p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vendors</h1>
        <button className="flex items-center px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Vendor
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium mb-4">Vendor Management</h2>
        <p className="text-gray-600">Manage your pharmaceutical vendors and suppliers here.</p>
      </div>
    </div>
  );
} 