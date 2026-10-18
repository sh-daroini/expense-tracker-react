import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format';

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);
  
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <section className="overflow-hidden rounded-3xl bg-[#17211d] p-6 text-white shadow-[0_18px_50px_rgba(23,33,29,0.12)] sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-white/60">Total balance</p>
          <h2 className="mt-3 font-['Manrope'] text-3xl font-extrabold tracking-tight sm:text-4xl">Rp {numberWithCommas(total)}</h2>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-xl text-[#c8f169]" aria-hidden="true">◉</span>
      </div>
      <div className="mt-7 flex items-center gap-2 text-xs font-medium text-white/55">
        <span className="h-2 w-2 rounded-full bg-[#c8f169]" />
        All transactions accounted for
      </div>
    </section>
  )
}

export default Balance
