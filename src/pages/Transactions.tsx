
import React, { useState } from 'react';
import AppShell from '@/components/layout/AppShell';
import TransactionList, { Transaction } from '@/components/transactions/TransactionList';
import TransactionForm from '@/components/transactions/TransactionForm';
import DateFilter from '@/components/filters/DateFilter';
import { Input } from '@/components/ui/input';
import { generateMockTransactions } from '@/utils/mockData';
import { v4 as uuidv4 } from 'uuid';

const Transactions = () => {
  const [dateFilter, setDateFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>(generateMockTransactions(20));

  const handleAddTransaction = (data: any) => {
    const newTransaction: Transaction = {
      id: uuidv4(),
      description: data.description,
      amount: data.amount,
      date: data.date,
      category: data.category,
      type: data.type,
    };
    
    setTransactions([newTransaction, ...transactions]);
  };

  const filteredTransactions = transactions.filter(transaction => {
    // Apply search filter
    const matchesSearch = searchTerm === '' || 
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply date filter (this is simplified - in a real app, you'd have more comprehensive date filtering)
    let dateMatches = true;
    const transactionDate = new Date(transaction.date);
    const today = new Date();
    
    if (dateFilter === 'thisMonth') {
      dateMatches = transactionDate.getMonth() === today.getMonth() && 
                   transactionDate.getFullYear() === today.getFullYear();
    } else if (dateFilter === 'lastMonth') {
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1);
      dateMatches = transactionDate.getMonth() === lastMonth.getMonth() && 
                   transactionDate.getFullYear() === lastMonth.getFullYear();
    } else if (dateFilter === 'last3Months') {
      const threeMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 3);
      dateMatches = transactionDate >= threeMonthsAgo;
    }
    
    return matchesSearch && dateMatches;
  });

  return (
    <AppShell>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Transactions</h1>
        </div>
        
        <TransactionForm onSubmit={handleAddTransaction} />
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Input
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <DateFilter value={dateFilter} onChange={setDateFilter} />
        </div>
        
        <TransactionList transactions={filteredTransactions} title="All Transactions" />
      </div>
    </AppShell>
  );
};

export default Transactions;
