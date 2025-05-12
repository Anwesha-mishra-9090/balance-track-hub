
import React from 'react';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  // Add this to verify router context is available
  const location = useLocation();
  
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">{children}</main>
    </div>
  );
};

export default AppShell;
