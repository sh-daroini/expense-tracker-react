import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  const [filter, setFilter] = useState('all')

  const getFilteredTransactions = () => {
    return transactions.filter(transaction => {
      if (filter === 'income') return transaction.amount > 0
      if (filter === 'expense') return transaction.amount < 0
      return true;
    })
  }

  const filteredTransactions = getFilteredTransactions()

  return (
    <section className="rounded-3xl border border-[#e7ebe6] bg-white p-5 sm:p-7">
  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 className="font-['Manrope'] text-lg font-bold text-[#17211d]">Recent activity</h2>
      <p className="mt-1 text-sm text-[#78847d]">Your latest transactions</p>
    </div>
    
    <div className="flex items-center gap-3 self-start sm:self-auto">
      {/* Tombol Filter */}
      <div className="flex items-center gap-1.5 rounded-xl bg-[#f5f7f4] p-1 text-xs">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-colors ${
            filter === 'all' 
              ? 'bg-white text-[#17211d] shadow-sm font-semibold' 
              : 'text-[#78847d] hover:text-[#17211d]'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('income')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-colors ${
            filter === 'income' 
              ? 'bg-[#e6f4ea] text-green-700 font-semibold' 
              : 'text-[#78847d] hover:text-green-600'
          }`}
        >
          Income
        </button>
        <button
          onClick={() => setFilter('expense')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-colors ${
            filter === 'expense' 
              ? 'bg-[#fce8e6] text-red-700 font-semibold' 
              : 'text-[#78847d] hover:text-red-600'
          }`}
        >
          Expense
        </button>
      </div>

      <span className="inline-flex h-7 items-center justify-center rounded-full bg-[#eef0ed] px-2.5 text-xs font-semibold text-[#54625a]">
        {filteredTransactions.length}
      </span>
    </div>
  </div>

  {filteredTransactions.length ? (
    <ul className="divide-y divide-[#eef0ed]">
      {filteredTransactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  ) : (
    <div className="rounded-2xl border border-dashed border-[#dce2da] px-4 py-12 text-center">
      <span className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-[#f5f7f4] text-xl text-[#78847d]">＋</span>
      <p className="text-sm font-semibold text-[#34413a]">No transactions found</p>
      <p className="mt-1 text-sm text-[#78847d]">Try changing your filter or add a new transaction.</p>
    </div>
  )}
</section>

  )
}

export default TransactionList
