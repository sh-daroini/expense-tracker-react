import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <div className="min-h-screen bg-[#f5f7f4]">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#78847d]">Personal finance</p>
            <h1 className="font-['Manrope'] text-3xl font-extrabold tracking-tight text-[#17211d] sm:text-4xl">Your money, in focus.</h1>
            <p className="mt-3 text-sm leading-6 text-[#78847d] sm:text-base">A clear view of what’s coming in and going out.</p>
          </div>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.85fr)] lg:gap-8">
            <section className="space-y-6">
              <Balance />
              <IncomeExpenses />
              <TransactionList />
            </section>
            <AddTransaction />
          </div>
        </main>
      </div>
    </GlobalProvider>
  )
}

export default App
