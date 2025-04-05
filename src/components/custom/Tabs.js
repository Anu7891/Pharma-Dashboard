import React from 'react';

const Tabs = ({ tabs, activeTab, onChange, className = '' }) => {
  return (
    <div className={`flex gap-6 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`py-2 px-3  text-base font-medium  ${
            activeTab === tab.id
              ? 'text-base border-b-2 border-green-600  tabs_active_color active_tab_border roboto_bold' 
              : ' hover:text-gray-700 disabled_tab_color'
          }`}
          onClick={() => onChange(tab?.id)}
        >
          {tab?.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs; 