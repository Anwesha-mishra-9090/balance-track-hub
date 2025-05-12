
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
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        {change && (
          <p className={cn(
            "text-sm mt-2", 
            isPositive ? "text-income" : "text-expense"
          )}>
            {isPositive ? "+" : "-"}{change} vs. last month
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
