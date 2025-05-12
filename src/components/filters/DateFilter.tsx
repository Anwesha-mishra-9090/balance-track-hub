
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

type DateFilterProps = {
  onChange: (period: string) => void;
  value: string;
};

const DateFilter: React.FC<DateFilterProps> = ({ onChange, value }) => {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="datePeriod" className="whitespace-nowrap">Filter by:</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id="datePeriod" className="w-[180px]">
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Time</SelectItem>
          <SelectItem value="thisMonth">This Month</SelectItem>
          <SelectItem value="lastMonth">Last Month</SelectItem>
          <SelectItem value="last3Months">Last 3 Months</SelectItem>
          <SelectItem value="last6Months">Last 6 Months</SelectItem>
          <SelectItem value="thisYear">This Year</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DateFilter;
