import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const { deleteTransaction } = useContext(GlobalContext)

  return (
    <li className="group flex items-center justify-between gap-3 py-4 first:pt-1 last:pb-1">
      <div className="flex min-w-0 items-center gap-3">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${transaction.amount < 0 ? 'bg-[#fff0e8] text-[#c66a43]' : 'bg-[#eef8dc] text-[#5b8527]'}`} aria-hidden="true">{transaction.amount < 0 ? '↗' : '↙'}</span>
        <span className="truncate text-sm font-semibold text-[#34413a]">{transaction.text}</span>
      </div>
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <span className={`text-sm font-bold ${transaction.amount < 0 ? 'text-[#a95132]' : 'text-[#315d28]'}`}>{sign} Rp {numberWithCommas(Math.abs(transaction.amount))}</span>
        <button
          type="button"
          aria-label={`Delete ${transaction.text}`}
          className="grid h-8 w-8 place-items-center rounded-lg text-lg text-[#9ba59e] transition hover:bg-[#fff0e8] hover:text-[#c66a43] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c66a43]"
          onClick={() => deleteTransaction(transaction.id)}
        >×</button>
      </div>
    </li>
  )
}

export default Transaction
