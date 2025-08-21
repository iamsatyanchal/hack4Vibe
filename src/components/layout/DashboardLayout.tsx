
import React from 'react';
import Sidebar from './Sidebar';
import BreadcrumbNavigation from '../ui/breadcrumb-navigation'; // import karo

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="ml-64">
        <BreadcrumbNavigation />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
