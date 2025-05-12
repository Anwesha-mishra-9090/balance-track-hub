
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type StatCardProps = {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  className?: string;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositive = true,
  className,
}) => {
  return (
    <Card className={cn("h-full border border-accent neon-border", className)}>
      <CardContent className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-1 uppercase">{title}</h3>
        <p className="text-2xl font-bold text-glow">{value}</p>
        {change && (
          <p className={cn(
            "text-sm mt-2 font-bold", 
            isPositive ? "text-income text-glow" : "text-expense text-glow"
          )}>
            {isPositive ? "+" : "-"}{change} vs. last month
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
