import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: crypto.randomUUID(),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
    setText('')
  }

  console.log(text)
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Amount <br />
            (negative - expense, positive - income)</label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction