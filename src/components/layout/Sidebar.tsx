
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad, Trophy, CreditCard, BarChartBig } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <aside className="w-64 h-full bg-sidebar border-r border-border hidden md:block">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-foreground mb-6 text-glow text-center">
          <span className="text-primary">BUDGET</span>
          <span className="text-secondary">ARCADE</span>
        </h1>
        
        <nav className="space-y-4">
          <Link 
            to="/" 
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive("/") 
                ? "bg-accent text-accent-foreground neon-border" 
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Gamepad className="mr-3" />
            <span className="ml-2 font-bold">DASHBOARD</span>
          </Link>
          
          <Link 
            to="/transactions" 
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive("/transactions") 
                ? "bg-accent text-accent-foreground neon-border" 
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <CreditCard className="mr-3" />
            <span className="ml-2 font-bold">TRANSACTIONS</span>
          </Link>
          
          <Link 
            to="/categories" 
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive("/categories") 
                ? "bg-accent text-accent-foreground neon-border" 
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <BarChartBig className="mr-3" />
            <span className="ml-2 font-bold">CATEGORIES</span>
          </Link>
          
          <Link 
            to="/reports" 
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive("/reports") 
                ? "bg-accent text-accent-foreground neon-border" 
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Trophy className="mr-3" />
            <span className="ml-2 font-bold">REPORTS</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
