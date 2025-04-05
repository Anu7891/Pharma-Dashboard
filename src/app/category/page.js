"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import PageHeader from '@/components/layout/PageHeader';
import { Button, Search, Tabs } from '@/components/custom';
const CategoryList = dynamic(() => import('@/containers/category-list/category-list'));

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

  const tabs = [
    { id: 'active', label: 'Active' },
    { id: 'deleted', label: 'Deleted' }
  ];

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="category-container">
      <PageHeader title="Category" />
      
      <section 
        className="category-content pt-4 px-6 pb-3 bg-white mx-10 mt-6 side-content-height  rounded-2xl"
        aria-labelledby="category-heading"
      >
        <h2 id="category-heading" className="sr-only">Category Management</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">

            <div className='flex gap-10'>
            <Tabs 
              tabs={tabs} 
              activeTab={activeTab} 
              onChange={setActiveTab} 
              aria-label="Category status tabs"
            />

              <Search
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Category Name"
                className="w-64 search_input"
                onClear={() => setSearchQuery('')}
                aria-label="Search categories"
              />
            </div>
            
            <div className="flex space-x-2">
              
              <Button
                onClick={() => console.log('Add category')}
                variant="primary"
                icon={<IoMdAdd aria-hidden="true" />}
                aria-label="Add new category"
                type="button"
              >
                Add Category
              </Button>
            </div>
          </div>
          
        
          {/* Category List */}
          <div className="bg-white w-full overflow-hidden pt-3">
            {activeTab === 'active' ? (
               <CategoryList 
                 categories={filteredCategories} 
                 onSelectCategory={handleSelectCategory}
               />
            ) : (
              <div className="p-6 text-center text-gray-500" role="region" aria-label="Deleted categories">
                Deleted categories will appear here
              </div>
            )}
          </div>
         
        </div>
      </section>
    </main>
  );
} 