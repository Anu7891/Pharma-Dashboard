'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FaEye, FaEdit, FaSortUp, FaSortDown } from 'react-icons/fa';
import { ACTIONS_ICON, EDIT_ICON, SORT_ASC_ICON, SORT_DESC_ICON } from '@/config/image-config';
import CustomImage from '@/components/custom-image/custom-image';
const SortButtons = dynamic(() => import('@/components/sort-buttons/sort-buttons'));

const CategoryList = ({ categories: propCategories, onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  // Update categories when prop changes
  useEffect(() => {
    if (propCategories && propCategories.length > 0) {
      // Transform prop data format to match component expectations
      const transformedCategories = propCategories.map(cat => ({
        id: cat.id,
        // Don't set a default image, we'll handle missing images with fallbacks
        image: cat.image || '',
        name: cat.name,
        childCategory: cat.childCount || 0,
        attributeGroup: true,
        selected: cat.selected || false
      }));
      setCategories(transformedCategories);
    }
  }, [propCategories]);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setCategories(categories.map(category => ({ ...category, selected: !selectAll })));
    // We could add a callback here to notify parent of all selections changing
  };

  const toggleSelect = (id) => {
    const updatedCategories = categories.map(category => 
      category.id === id ? { ...category, selected: !category.selected } : category
    );
    setCategories(updatedCategories);
    
    // Notify parent component about the selection change
    if (onSelectCategory) {
      onSelectCategory(id);
    }
  };

  const handleImageError = (id) => {
    setImageErrors(prev => ({...prev, [id]: true}));
  };

  // Function to render a fallback for missing images
  const renderImageOrFallback = (category) => {
    if (!category.image || imageErrors[category.id]) {
      return (
        <div className="w-full h-full bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 flex items-center justify-center">
          <div className="text-xs text-white font-bold">{category.name.charAt(0).toUpperCase()}</div>
        </div>
      );
    }
    
    return (
      <CustomImage 
        src={category.image} 
        alt={category.name} 
        width={48} 
        height={48} 
        onError={() => handleImageError(category.id)}
      />
    );
  };

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto">
        <table className="w-full table-fixed border-collapse bg-white">
          <thead className="border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 table_header roboto_regular">Sr.No</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 table_header roboto_regular">Image</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 table_header roboto_regular">Category Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 table_header roboto_regular">Child Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 table_header roboto_regular">Attribute Group</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 table_header roboto_regular">Sort</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 table_header roboto_regular">Actions</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 roboto_regular">
                <input 
                  type="checkbox" 
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 rounded border-gray-300"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <tr key={category.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-12 h-12 relative rounded overflow-hidden">
                      {renderImageOrFallback(category)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium table_header roboto_regular text-center">{category.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm table_header roboto_regular text-center">{category.childCategory}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center ">
                    <button type="button" aria-label="attribute-group" >
                      <CustomImage 
                        src={EDIT_ICON} 
                        alt="Edit" 
                        title="Edit" 
                        width={20} 
                        height={20} 
                        onError={() => {}} // Ignore errors for icons
                      />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <SortButtons />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center cursor-pointer flex justify-center">
                    <CustomImage 
                      src={ACTIONS_ICON} 
                      alt="actions" 
                      title="actions" 
                      width={18} 
                      height={18}
                      onError={() => {}} // Ignore errors for icons
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input 
                      type="checkbox" 
                      checked={category.selected}
                      onChange={() => toggleSelect(category.id)}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-500">
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;
