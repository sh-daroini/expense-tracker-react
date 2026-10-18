import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  return (
    <section className="rounded-3xl border border-[#e7ebe6] bg-white p-5 sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="font-['Manrope'] text-lg font-bold text-[#17211d]">Recent activity</h2>
          <p className="mt-1 text-sm text-[#78847d]">Your latest transactions</p>
        </div>
        <span className="rounded-full bg-[#f5f7f4] px-3 py-1.5 text-xs font-semibold text-[#78847d]">{transactions.length} {transactions.length === 1 ? 'item' : 'items'}</span>
      </div>
      {transactions.length ? (
        <ul className="divide-y divide-[#eef0ed]">
          {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
        </ul>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#dce2da] px-4 py-10 text-center">
          <span className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-[#f5f7f4] text-xl text-[#78847d]">＋</span>
          <p className="text-sm font-semibold text-[#34413a]">No transactions yet</p>
          <p className="mt-1 text-sm text-[#78847d]">Add your first transaction to get started.</p>
        </div>
      )}
    </section>
  )
}

export default TransactionList
