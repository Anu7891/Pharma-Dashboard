"use client";

import { useState } from 'react';
import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

export default function CategoryPage() {
  const [activeTab, setActiveTab] = useState('active');
  const [categories, setCategories] = useState([
    { id: 1, name: 'Dental', childCount: 5, selected: true },
    { id: 2, name: 'Pharma', childCount: 3, selected: false },
    { id: 3, name: 'Medial', childCount: 6, selected: true },
    { id: 4, name: 'Pencilier', childCount: 1, selected: false },
    { id: 5, name: 'xyz', childCount: 3, selected: false },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectCategory = (id) => {
    setCategories(
      categories.map((category) =>
        category.id === id
          ? { ...category, selected: !category.selected }
          : category
      )
    );
  };

  const handleDelete = (id) => {
    // Implementation would go here
    console.log('Delete category', id);
  };

  return (
    <div className="category-container">
      <div className="category-header">
        <h1 className="category-header-title">Category</h1>
        <div className="dashboard-header-actions">
          <button className="dashboard-icon-button">
            <span className="sr-only">Settings</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="dashboard-icon-button">
            <span className="sr-only">Notifications</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <div className="dashboard-user-avatar dashboard-user-avatar-orange">
            SI
          </div>
        </div>
      </div>

      <div className="category-content">
        <div className="category-tabs">
          <button 
            className={`category-tabs-button ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Active
          </button>
          <button 
            className={`category-tabs-button ${activeTab === 'deleted' ? 'active' : ''}`}
            onClick={() => setActiveTab('deleted')}
          >
            Deleted
          </button>
          <div className="category-search">
            <div className="category-search-input">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Category Name"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="category-add-button">
              <IoMdAdd className="mr-1" />
              Add Category
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="category-table">
            <thead className="category-table-head">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr No</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category Name</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Child Category</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attribute Group</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sort</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                <th scope="col" className="px-4 py-3 text-center">
                  <input type="checkbox" className="category-checkbox" />
                </th>
              </tr>
            </thead>
            <tbody className="category-table-body">
              {categories.map((category) => (
                <tr key={category.id} className="category-table-row">
                  <td className="category-table-cell category-table-cell-id">{category.id}</td>
                  <td className="category-table-cell">
                    <div className="category-image">
                      <div className="category-image-grid">
                        <div className="category-image-grid-red"></div>
                        <div className="category-image-grid-yellow"></div>
                        <div className="category-image-grid-blue"></div>
                        <div className="category-image-grid-green"></div>
                      </div>
                    </div>
                  </td>
                  <td className="category-table-cell category-table-cell-name">{category.name}</td>
                  <td className="category-table-cell">{category.childCount}</td>
                  <td className="category-table-cell">
                    <button className="category-action-button">
                      <FiEye className="category-action-button-icon" />
                    </button>
                  </td>
                  <td className="category-table-cell">
                    <div className="category-sort-buttons">
                      <button className="category-action-button">
                        <FiChevronUp className="category-action-button-icon" />
                      </button>
                      <button className="category-action-button">
                        <FiChevronDown className="category-action-button-icon" />
                      </button>
                    </div>
                  </td>
                  <td className="category-table-cell">
                    <div className="category-table-cell-actions">
                      <button className="category-action-button">
                        <FiEdit className="category-action-button-icon" />
                      </button>
                    </div>
                  </td>
                  <td className="category-table-cell text-center">
                    <input 
                      type="checkbox" 
                      checked={category.selected}
                      onChange={() => handleSelectCategory(category.id)}
                      className="category-checkbox"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 