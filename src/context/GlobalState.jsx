import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// 1. Ambil data awal dari localStorage (jika kosong, gunakan array kosong)
// Ambil dan validasi data dari localStorage dengan aman
const getInitialTransactions = () => {
  
  const saved = localStorage.getItem('transactions');
  if (!saved || saved === 'undefined') return [];
  
  try {
    return JSON.parse(saved);
  } catch (e) {
    return [];
  }
};

const initialState = {
  transactions: getInitialTransactions()
};


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
