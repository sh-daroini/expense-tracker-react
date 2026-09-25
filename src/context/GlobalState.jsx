import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// 1. Ambil data awal dari localStorage (jika kosong, gunakan array kosong)
const initialState = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 2. Pantau perubahan state.transactions dan simpan ke localStorage
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
