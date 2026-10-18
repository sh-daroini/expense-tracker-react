import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-[#e7ebe6] bg-white p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-[#78847d]">Income</h3>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#eef8dc] text-lg text-[#5b8527]">↙</span>
        </div>
        <p className="mt-4 font-['Manrope'] text-2xl font-bold tracking-tight text-[#315d28]">+ Rp {numberWithCommas(income)}</p>
      </div>
      <div className="rounded-2xl border border-[#e7ebe6] bg-white p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-[#78847d]">Expenses</h3>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#fff0e8] text-lg text-[#c66a43]">↗</span>
        </div>
        <p className="mt-4 font-['Manrope'] text-2xl font-bold tracking-tight text-[#a95132]">− Rp {numberWithCommas(expense)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
