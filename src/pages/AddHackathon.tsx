import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import BreadcrumbNavigation from '../components/ui/breadcrumb-navigation';
import { Plus, Globe, Calendar, Users, Trophy, ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import UserMenu from '../components/auth/UserMenu';

const AddHackathon = () => {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    theme: '',
    startDate: '',
    endDate: '',
    prizes: '',
    maxTeamSize: '',
    categories: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.url) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in the hackathon name and URL.",
        variant: "destructive"
      });
      return;
    }

    // Here you would save to your backend/storage
    toast({
      title: "Hackathon Added Successfully!",
      description: `${formData.name} has been added to your hackathons.`,
    });

    // Reset form
    setFormData({
      name: '',
      url: '',
      description: '',
      theme: '',
      startDate: '',
      endDate: '',
      prizes: '',
      maxTeamSize: '',
      categories: ''
    });
  };

  return (
    <ProtectedRoute>
      {/* Breadcrumb Navigation at the top */}
      <div className="absolute top-[0.5rem] right-6 z-10">
          <UserMenu />
        </div>
      
      <DashboardLayout>
        <div className="max-w-4xl space-y-8">
          <div className="bg-card rounded-lg border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Hackathon Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="TechCrunch Disrupt 2024"
                    className="w-full px-3 py-2 border border-border bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="url" className="block text-sm font-medium text-foreground mb-2">
                    Hackathon URL *
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="url"
                      name="url"
                      type="url"
                      required
                      value={formData.url}
                      onChange={handleInputChange}
                      placeholder="https://hackathon.example.com"
                      className="w-full pl-10 pr-3 py-2 border border-border bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Brief description of the hackathon..."
                  className="w-full px-3 py-2 border border-border bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="theme" className="block text-sm font-medium text-foreground mb-2">
                    Theme
                  </label>
                  <input
                    id="theme"
                    name="theme"
                    type="text"
                    value={formData.theme}
                    onChange={handleInputChange}
                    placeholder="AI & Sustainability"
                    className="w-full px-3 py-2 border border-border bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-foreground mb-2">
                    Start Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border border-border bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-foreground mb-2">
                    End Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="endDate"
                      name="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border border-border bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="prizes" className="block text-sm font-medium text-foreground mb-2">
                    Prize Pool
                  </label>
                  <div className="relative">
                    <Trophy className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="prizes"
                      name="prizes"
                      type="text"
                      value={formData.prizes}
                      onChange={handleInputChange}
                      placeholder="$50,000 in prizes"
                      className="w-full pl-10 pr-3 py-2 border border-border bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="maxTeamSize" className="block text-sm font-medium text-foreground mb-2">
                    Max Team Size
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="maxTeamSize"
                      name="maxTeamSize"
                      type="number"
                      value={formData.maxTeamSize}
                      onChange={handleInputChange}
                      placeholder="4"
                      className="w-full pl-10 pr-3 py-2 border border-border bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="categories" className="block text-sm font-medium text-foreground mb-2">
                  Categories
                </label>
                <input
                  id="categories"
                  name="categories"
                  type="text"
                  value={formData.categories}
                  onChange={handleInputChange}
                  placeholder="AI/ML, Web Development, Mobile, etc. (comma separated)"
                  className="w-full px-3 py-2 border border-border bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-foreground text-background px-6 py-2 rounded-md font-medium hover:bg-foreground/90 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  Add Hackathon
                </button>
                
                <button
                  type="button"
                  onClick={() => window.open(formData.url || '#', '_blank')}
                  disabled={!formData.url}
                  className="flex items-center gap-2 bg-muted text-foreground px-6 py-2 rounded-md font-medium hover:bg-muted/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ExternalLink className="h-4 w-4" />
                  Preview URL
                </button>
              </div>
            </form>
          </div>
        </div>
      </DashboardLayout>
   </ProtectedRoute>
  );
};

export default AddHackathon;
