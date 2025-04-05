'use client';

import Sidebar from "./sidebar"

export default function DashboardLayout({ children }) {
  return (
    <div className=" min-h-screen dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <main className="dashboard-main p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 