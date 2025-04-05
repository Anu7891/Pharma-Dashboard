'use client';

import Sidebar from "./Sidebar"

export default function DashboardLayout({ children }) {
  return (
    <div className=" min-h-screen dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
} 