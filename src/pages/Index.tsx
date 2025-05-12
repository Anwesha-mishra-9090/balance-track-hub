
import React, { useState } from 'react';
import AppShell from '@/components/layout/AppShell';
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
    <AppShell>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <DateFilter value={dateFilter} onChange={setDateFilter} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OverviewChart data={chartData} />
          <CategoryPieChart data={categoryData} />
        </div>

        <TransactionList 
          transactions={mockTransactions.slice(0, 5)} 
          title="Recent Transactions"
        />
      </div>
    </AppShell>
  );
};

export default Dashboard;
