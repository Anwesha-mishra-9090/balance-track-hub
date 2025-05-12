
import { Transaction } from '@/components/transactions/TransactionList';
import { addDays, subDays, subMonths, format } from 'date-fns';

// Generate mock transaction data
export const generateMockTransactions = (count: number): Transaction[] => {
  const categories = ['Food', 'Housing', 'Transportation', 'Entertainment', 'Healthcare', 'Utilities', 'Salary', 'Investments', 'Other'];
  const descriptions = [
    'Grocery shopping', 'Rent payment', 'Gas station', 'Movie tickets', 
    'Doctor visit', 'Electricity bill', 'Monthly salary', 'Stock dividend',
    'Online purchase', 'Restaurant dinner', 'Public transit', 'Gym membership',
    'Coffee shop', 'Phone bill', 'Internet service', 'Clothing purchase',
    'Home repair', 'Car maintenance', 'Gift purchase', 'Bonus payment'
  ];

  const transactions: Transaction[] = [];
  
  for (let i = 0; i < count; i++) {
    const isIncome = Math.random() > 0.7;
    const category = isIncome ? 
      categories[Math.floor(Math.random() * 2) + 6] : // Income categories
      categories[Math.floor(Math.random() * 6)]; // Expense categories
    
    const description = isIncome ?
      descriptions[Math.floor(Math.random() * 2) + 6] : // Income descriptions
      descriptions[Math.floor(Math.random() * (descriptions.length - 2))]; // Expense descriptions
    
    const amount = isIncome ? 
      Math.floor(Math.random() * 3000) + 1000 : // Income amount
      Math.floor(Math.random() * 200) + 10; // Expense amount
    
    // Generate a random date within the last 6 months
    const date = format(subDays(new Date(), Math.floor(Math.random() * 180)), 'yyyy-MM-dd');
    
    transactions.push({
      id: `trans-${i}`,
      description,
      amount,
      date,
      category,
      type: isIncome ? 'income' : 'expense',
    });
  }

  // Sort by date (newest first)
  return transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Generate chart data
export const generateMockChartData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
  return months.map(month => ({
    name: month,
    income: Math.floor(Math.random() * 5000) + 3000,
    expenses: Math.floor(Math.random() * 3000) + 1000,
  }));
};

// Generate category distribution data
export const generateMockCategoryData = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF'];
  
  return [
    { name: 'Food', value: 400, color: COLORS[0] },
    { name: 'Housing', value: 800, color: COLORS[1] },
    { name: 'Transportation', value: 300, color: COLORS[2] },
    { name: 'Entertainment', value: 200, color: COLORS[3] },
    { name: 'Utilities', value: 250, color: COLORS[4] },
  ];
};
