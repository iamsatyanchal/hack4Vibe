
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, MapPin, Users, Trophy, Clock, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';

interface Hackathon {
  id: string;
  name: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  location: string;
  status: 'upcoming' | 'active' | 'completed';
  participants: number;
  maxParticipants: number;
  website?: string;
  registrationDeadline: string;
  prizes: Prize[];
  judges: Judge[];
  schedule: ScheduleItem[];
  categories: string[];
  requirements: string[];
  rules: string[];
}

interface Prize {
  position: string;
  amount: string;
  description: string;
  sponsor?: string;
}

interface Judge {
  name: string;
  title: string;
  company: string;
  image: string;
  bio: string;
  expertise: string[];
}

interface ScheduleItem {
  time: string;
  date: string;
  title: string;
  description: string;
  type: 'registration' | 'workshop' | 'presentation' | 'judging' | 'announcement';
}

const HackathonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [hackathon, setHackathon] = useState<Hackathon | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchHackathonData = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          const mockData: Hackathon = {
            id: id || '1',
            name: 'TechCrunch Disrupt 2024',
            description: 'Join the most prestigious startup competition where innovative ideas meet cutting-edge technology. Build revolutionary products that will shape the future of technology and compete for amazing prizes.',
            image: `https://api.dicebear.com/9.x/shapes/svg?seed=${id}`,
            startDate: '2024-12-15T09:00:00Z',
            endDate: '2024-12-17T18:00:00Z',
            location: 'San Francisco, CA',
            status: 'upcoming',
            participants: 1250,
            maxParticipants: 2000,
            website: 'https://techcrunch.com/disrupt',
            registrationDeadline: '2024-12-10T23:59:59Z',
            categories: ['AI/ML', 'Web3', 'FinTech', 'HealthTech', 'Climate Tech'],
            requirements: [
              'Team of 2-4 members',
              'At least one team member must be present',
              'Original idea developed during the hackathon',
              'Must use provided APIs'
            ],
            rules: [
              'No pre-existing code allowed',
              'All work must be done during the event',
              'Teams must present their solution',
              'Code must be submitted before deadline'
            ],
            prizes: [
              {
                position: '1st Place',
                amount: '$50,000',
                description: 'Grand Prize Winner + Mentorship Program',
                sponsor: 'TechCrunch'
              },
              {
                position: '2nd Place',
                amount: '$25,000',
                description: 'Runner-up + Y Combinator Interview',
                sponsor: 'Y Combinator'
              },
              {
                position: '3rd Place',
                amount: '$10,000',
                description: 'Third Place + AWS Credits',
                sponsor: 'Amazon Web Services'
              },
              {
                position: 'Best AI Solution',
                amount: '$5,000',
                description: 'Special Category Prize',
                sponsor: 'OpenAI'
              }
            ],
            judges: [
              {
                name: 'Sarah Chen',
                title: 'Partner',
                company: 'Andreessen Horowitz',
                image: 'https://api.dicebear.com/9.x/notionists/svg?seed=sarah',
                bio: 'Sarah is a seasoned venture capitalist with over 15 years of experience in tech investments.',
                expertise: ['FinTech', 'AI/ML', 'Enterprise Software']
              },
              {
                name: 'Marcus Johnson',
                title: 'CTO',
                company: 'Stripe',
                image: 'https://api.dicebear.com/9.x/notionists/svg?seed=marcus',
                bio: 'Marcus leads engineering at Stripe and has built multiple successful startups.',
                expertise: ['Payments', 'Infrastructure', 'Web3']
              },
              {
                name: 'Dr. Priya Patel',
                title: 'Director of AI',
                company: 'Google',
                image: 'https://api.dicebear.com/9.x/notionists/svg?seed=priya',
                bio: 'Dr. Patel leads AI research initiatives and has published 50+ papers on machine learning.',
                expertise: ['AI/ML', 'Research', 'Product Strategy']
              }
            ],
            schedule: [
              {
                time: '09:00 AM',
                date: 'Dec 15, 2024',
                title: 'Registration & Welcome',
                description: 'Check-in, team formation, and opening ceremony',
                type: 'registration'
              },
              {
                time: '10:30 AM',
                date: 'Dec 15, 2024',
                title: 'Hacking Begins',
                description: 'Teams start working on their projects',
                type: 'workshop'
              },
              {
                time: '01:00 PM',
                date: 'Dec 15, 2024',
                title: 'Lunch & Networking',
                description: 'Lunch break and networking opportunities',
                type: 'announcement'
              },
              {
                time: '03:00 PM',
                date: 'Dec 16, 2024',
                title: 'Mid-point Check-in',
                description: 'Teams present progress to mentors',
                type: 'presentation'
              },
              {
                time: '10:00 AM',
                date: 'Dec 17, 2024',
                title: 'Final Presentations',
                description: 'Teams present their final solutions',
                type: 'presentation'
              },
              {
                time: '04:00 PM',
                date: 'Dec 17, 2024',
                title: 'Judging & Awards',
                description: 'Final judging and award ceremony',
                type: 'judging'
              }
            ]
          };
          setHackathon(mockData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching hackathon data:', error);
        setLoading(false);
      }
    };

    fetchHackathonData();
  }, [id]);

  if (loading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-foreground border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading hackathon details...</p>
            </div>
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  if (!hackathon) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Hackathon Not Found</h2>
            <p className="text-muted-foreground">The hackathon you're looking for doesn't exist.</p>
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500 text-white';
      case 'upcoming':
        return 'bg-blue-500 text-white';
      case 'completed':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-8">
          {/* Header Section */}
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-shrink-0">
                <img
                  src={hackathon.image}
                  alt={hackathon.name}
                  className="w-32 h-32 rounded-lg object-cover border-2 border-border"
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{hackathon.name}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {hackathon.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(hackathon.status)}>
                    {hackathon.status.toUpperCase()}
                  </Badge>
                </div>

                <p className="text-foreground leading-relaxed">{hackathon.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {hackathon.participants}/{hackathon.maxParticipants} participants
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Registration deadline: {formatDate(hackathon.registrationDeadline)}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-foreground text-background hover:bg-foreground/90">
                    Register Now
                  </Button>
                  {hackathon.website && (
                    <Button variant="outline" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Visit Website
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-muted">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="prizes" 
                className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Prizes
              </TabsTrigger>
              <TabsTrigger 
                value="judges" 
                className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Judges
              </TabsTrigger>
              <TabsTrigger 
                value="schedule" 
                className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Schedule
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.categories.map((category, index) => (
                        <Badge key={index} variant="outline">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {hackathon.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Rules & Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {hackathon.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="prizes" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hackathon.prizes.map((prize, index) => (
                  <Card key={index} className="relative">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Trophy className="h-5 w-5 text-yellow-500" />
                          {prize.position}
                        </CardTitle>
                        <Badge variant="outline">{prize.amount}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground mb-2">{prize.description}</p>
                      {prize.sponsor && (
                        <p className="text-sm text-muted-foreground">
                          Sponsored by {prize.sponsor}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="judges" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hackathon.judges.map((judge, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <img
                          src={judge.image}
                          alt={judge.name}
                          className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-border"
                        />
                        <h3 className="font-semibold text-foreground">{judge.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {judge.title} at {judge.company}
                        </p>
                      </div>
                      <p className="text-sm text-foreground mb-3">{judge.bio}</p>
                      <div className="flex flex-wrap gap-1">
                        {judge.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              <div className="space-y-4">
                {hackathon.schedule.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex-shrink-0 text-center">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-2">
                          <Clock className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.time}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {item.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
                        <p className="text-sm text-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default HackathonDetail;
