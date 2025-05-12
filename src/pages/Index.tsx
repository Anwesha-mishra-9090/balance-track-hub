
import React, { useState } from 'react';
import StatCard from '@/components/dashboard/StatCard';
import OverviewChart from '@/components/dashboard/OverviewChart';
import CategoryPieChart from '@/components/dashboard/CategoryPieChart';
import TransactionList from '@/components/transactions/TransactionList';
import DateFilter from '@/components/filters/DateFilter';
import { 
  generateMockTransactions, 
  generateMockChartData, 
  generateMockCategoryData 
} from '@/utils/mockData';
import { Gamepad, Trophy, Sparkles } from 'lucide-react';

// Generate mock data
const mockTransactions = generateMockTransactions(30);
const chartData = generateMockChartData();
const categoryData = generateMockCategoryData();

const Dashboard = () => {
  const [dateFilter, setDateFilter] = useState('thisMonth');
  
  // Calculate summary stats
  const totalIncome = mockTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  
  const totalExpenses = mockTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  
  const balance = totalIncome - totalExpenses;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex items-center">
          <Gamepad className="h-8 w-8 mr-3 text-primary animate-pulse-glow" />
          <h1 className="text-3xl font-bold text-glow">Budget Dashboard</h1>
          <Trophy className="h-6 w-6 ml-3 text-secondary" />
        </div>
        <DateFilter value={dateFilter} onChange={setDateFilter} />
      </div>
      
      <div className="relative">
        <div className="absolute -top-10 -right-10 opacity-20 pointer-events-none z-0">
          <Sparkles className="h-24 w-24 text-secondary" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <StatCard 
            title="Total Balance" 
            value={`$${balance.toFixed(2)}`} 
            isPositive={balance >= 0}
          />
          <StatCard 
            title="Income" 
            value={`$${totalIncome.toFixed(2)}`} 
            change="12.5%"
            isPositive={true}
          />
          <StatCard 
            title="Expenses" 
            value={`$${totalExpenses.toFixed(2)}`} 
            change="5.2%"
            isPositive={false}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <div className="absolute -top-4 -left-4 opacity-10 pointer-events-none z-0">
            <Trophy className="h-16 w-16 text-primary" />
          </div>
          <OverviewChart data={chartData} />
        </div>
        <div className="relative">
          <div className="absolute -top-4 -right-4 opacity-10 pointer-events-none z-0">
            <Gamepad className="h-16 w-16 text-secondary" />
          </div>
          <CategoryPieChart data={categoryData} />
        </div>
      </div>

      <div className="relative">
        <TransactionList 
          transactions={mockTransactions.slice(0, 5)} 
          title="Recent Transactions"
        />
      </div>
    </div>
  );
};

export default Dashboard;
