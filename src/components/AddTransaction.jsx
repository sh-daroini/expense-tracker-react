import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text.trim() || !Number.isFinite(Number(amount)) || Number(amount) === 0) return

    const newTransaction = {
      id: crypto.randomUUID(),
      text: text.trim(),
      amount: +amount
    }

    addTransaction(newTransaction)
    setText('')
    setAmount('')
  }

  return (
    <section className="rounded-3xl border border-[#e7ebe6] bg-white p-5 sm:p-7">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#78847d]">Keep it up to date</p>
        <h2 className="mt-2 font-['Manrope'] text-xl font-bold text-[#17211d]">Add a transaction</h2>
        <p className="mt-2 text-sm leading-6 text-[#78847d]">Record income or an expense to update your balance.</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label htmlFor="transaction-text" className="mb-2 block text-sm font-semibold text-[#34413a]">Description</label>
          <input
            id="transaction-text"
            type="text"
            placeholder="e.g. Groceries"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="w-full rounded-xl border border-[#dce2da] bg-[#fbfcfa] px-4 py-3 text-sm text-[#17211d] outline-none transition placeholder:text-[#a1aaa3] focus:border-[#7ca73b] focus:ring-4 focus:ring-[#c8f169]/25"
          />
        </div>
        <div>
          <label htmlFor="transaction-amount" className="mb-2 block text-sm font-semibold text-[#34413a]">Amount</label>
          <p className="mb-2 text-xs leading-5 text-[#78847d]">Use a positive number for income or negative for an expense.</p>
          <input
            id="transaction-amount"
            type="number"
            placeholder="e.g. 250000 or -85000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step="any"
            required
            className="w-full rounded-xl border border-[#dce2da] bg-[#fbfcfa] px-4 py-3 text-sm text-[#17211d] outline-none transition placeholder:text-[#a1aaa3] focus:border-[#7ca73b] focus:ring-4 focus:ring-[#c8f169]/25"
          />
        </div>
        <button className="w-full rounded-xl bg-[#c8f169] px-4 py-3.5 text-sm font-bold text-[#17211d] transition hover:bg-[#b9e65b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ca73b]">Add transaction <span aria-hidden="true">→</span></button>
      </form>
    </section>
  )
}

export default AddTransaction
