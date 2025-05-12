
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad, Trophy, CreditCard, BarChartBig, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="md:hidden fixed top-4 left-4 z-30">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full bg-accent text-accent-foreground animate-pulse-glow">
            <Menu className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-sidebar h-[80%]">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-glow">
                <span className="text-primary">BUDGET</span>
                <span className="text-secondary">ARCADE</span>
              </h1>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="space-y-4">
              <Link 
                to="/" 
                onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
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
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileSidebar;
