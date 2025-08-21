
import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatsCard from '../components/dashboard/StatsCard';
import BreadcrumbNavigation from '../components/ui/breadcrumb-navigation';
import UserMenu from '../components/auth/UserMenu';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import { FolderOpen, Plus, Bookmark, Lightbulb, TrendingUp, Calendar } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  const recentHackathons = [
    {
      id: "1",
      name: "TechCrunch Disrupt 2024",
      status: "Active",
      endDate: "Dec 15, 2024",
      projects: 3
    },
    {
      id: "2",
      name: "AI for Good Hackathon",
      status: "Upcoming", 
      endDate: "Jan 20, 2025",
      projects: 0
    }
  ];

  const recentProjects = [
    {
      name: "AI Code Review Tool",
      hackathon: "TechCrunch Disrupt 2024",
      status: "In Progress",
      match: "92%"
    },
    {
      name: "Sustainable Transport App",
      hackathon: "Green Tech Challenge",
      status: "Completed",
      match: "87%"
    }
  ];

  return (
    <ProtectedRoute>
      <DashboardLayout>
        {/* User Menu in top right corner */}
        <div className="fixed top-[0.5rem] right-6 z-10">
          <UserMenu />
        </div>
        
        <div className="space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Active Hackathons"
              value="3"
              icon={Calendar}
              change="+1 this week"
              changeType="positive"
            />
            <StatsCard
              title="Generated Projects"
              value="12"
              icon={Lightbulb}
              change="+4 this week"
              changeType="positive"
            />
            <StatsCard
              title="Saved Projects"
              value="8"
              icon={FolderOpen}
              change="2 new"
              changeType="neutral"
            />
            <StatsCard
              title="Success Rate"
              value="94%"
              icon={TrendingUp}
              change="+2% this month"
              changeType="positive"
            />
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NavLink
              to="/add-hackathon"
              className="group bg-card border border-border rounded-lg p-6 hover:bg-accent transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-background transition-colors">
                  <Plus className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Add Hackathon</h3>
                  <p className="text-sm text-muted-foreground">Track a new hackathon</p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to="/generate"
              className="group bg-card border border-border rounded-lg p-6 hover:bg-accent transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-background transition-colors">
                  <Lightbulb className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Generate Ideas</h3>
                  <p className="text-sm text-muted-foreground">AI-powered project suggestions</p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to="/projects"
              className="group bg-card border border-border rounded-lg p-6 hover:bg-accent transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-background transition-colors">
                  <FolderOpen className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">My Projects</h3>
                  <p className="text-sm text-muted-foreground">View saved projects</p>
                </div>
              </div>
            </NavLink>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Hackathons */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Recent Hackathons</h2>
                <NavLink to="/saved" className="text-sm text-muted-foreground hover:text-foreground">
                  View all
                </NavLink>
              </div>
              <div className="space-y-3">
                {recentHackathons.map((hackathon, index) => (
                  <NavLink
                    key={index}
                    to={`/hackathon/${hackathon.id}`}
                    className="flex items-center justify-between p-3 bg-muted rounded-md hover:bg-accent transition-colors"
                  >
                    <div>
                      <h3 className="font-medium text-foreground">{hackathon.name}</h3>
                      <p className="text-sm text-muted-foreground">Ends {hackathon.endDate}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        hackathon.status === 'Active' 
                          ? 'bg-foreground text-background' 
                          : 'bg-muted-foreground text-background'
                      }`}>
                        {hackathon.status}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">{hackathon.projects} projects</p>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Recent Projects */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Recent Projects</h2>
                <NavLink to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
                  View all 
                </NavLink>
              </div>
              <div className="space-y-3">
                {recentProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-md">
                    <div>
                      <h3 className="font-medium text-foreground">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">{project.hackathon}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-foreground">{project.match} match</span>
                      <p className="text-sm text-muted-foreground">{project.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default Dashboard;
