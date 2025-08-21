
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  changeType = 'neutral' 
}) => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border hover:bg-accent/50 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${
              changeType === 'positive' ? 'text-foreground' : 
              changeType === 'negative' ? 'text-muted-foreground' : 
              'text-muted-foreground'
            }`}>
              {change}
            </p>
          )}
        </div>
        <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
