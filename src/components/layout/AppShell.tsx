
import React from 'react';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import MobileSidebar from './MobileSidebar';

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  // Add this to verify router context is available
  const location = useLocation();
  
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <MobileSidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppShell;
