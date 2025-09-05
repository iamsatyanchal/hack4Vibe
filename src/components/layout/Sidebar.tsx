import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Plus, 
  FolderOpen, 
  Lightbulb, 
  Bookmark 
} from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Add Hackathon', path: '/add-hackathon', icon: Plus },
    { name: 'My Projects', path: '/projects', icon: FolderOpen },
    { name: 'Generate Ideas', path: '/generate', icon: Lightbulb },
    { name: 'Saved Hackathons', path: '/saved', icon: Bookmark },
  ];

  return (
    <div className="w-64 bg-background border-r border-border h-screen fixed left-0 top-0 z-40">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">HV</span>
            </div>
            <span className="font-semibold text-xl text-foreground">HackVibe</span>
          </div>
          <ThemeToggle />
        </div>
      </div>
      
      <nav className="mt-8">
        <div className="px-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`
              }
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-muted rounded-lg p-4 border border-border">
          <h3 className="text-sm font-medium text-foreground mb-2">Ready to build?</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Generate winning hackathon projects with AI
          </p>
          <NavLink 
            to="/login"
            className="block w-full bg-foreground text-background text-xs py-2 px-3 rounded-md hover:bg-foreground/90 transition-colors text-center"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
