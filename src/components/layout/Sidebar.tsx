
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-sidebar border-r border-border hidden md:block">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Budget Tracker</h1>
        
        <nav className="space-y-4">
          <Link 
            to="/" 
            className="flex items-center px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors"
          >
            <span className="ml-2">Dashboard</span>
          </Link>
          
          <Link 
            to="/transactions" 
            className="flex items-center px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors"
          >
            <span className="ml-2">Transactions</span>
          </Link>
          
          <Link 
            to="/categories" 
            className="flex items-center px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors"
          >
            <span className="ml-2">Categories</span>
          </Link>
          
          <Link 
            to="/reports" 
            className="flex items-center px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors"
          >
            <span className="ml-2">Reports</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
