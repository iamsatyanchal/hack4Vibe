
import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { ChevronRight, LayoutPanelLeft, Slash, Crown } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const params = useParams();
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const path = location.pathname;
    
    const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
      '/': [{ label: 'Dashboard', path: '/' }],
      '/add-hackathon': [
        { label: 'Dashboard', path: '/' },
        { label: 'Add Hackathon', path: '/add-hackathon' }
      ],
      '/projects': [
        { label: 'Dashboard', path: '/' },
        { label: 'My Projects', path: '/projects' }
      ],
      '/generate': [
        { label: 'Dashboard', path: '/' },
        { label: 'Generate Ideas', path: '/generate' }
      ],
      '/saved': [
        { label: 'Dashboard', path: '/' },
        { label: 'Saved Hackathons', path: '/saved' }
      ]
    };

    // Handle dynamic hackathon detail route
    if (path.startsWith('/hackathon/')) {
      return [
        { label: 'Dashboard', path: '/' },
        { label: 'Hackathon Details', path: path }
      ];
    }
    
    return breadcrumbMap[path] || [{ label: 'Dashboard', path: '/' }];
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="w-full px-6 py-4 border-b sticky top-[0px] border-border bg-background">
        <nav className="flex items-center space-x-2 text-sm">
          <LayoutPanelLeft className="h-4 w-4 text-muted-foreground" />
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={breadcrumb.path}>
              <Slash className="h-3 w-3 text-muted-foreground" style={{ transform: 'rotate(-20deg)'}} />
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-foreground">
                  {breadcrumb.label}
                </span>
              ) : (
                <NavLink
                  to={breadcrumb.path}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {breadcrumb.label}
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
  );
};

export default BreadcrumbNavigation;
