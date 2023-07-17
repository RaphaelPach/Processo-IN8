import { createContext, useContext, useState, useEffect } from "react";

export const ExpenseContext = createContext({});

function ExpenseProvider({ children }) {
  const [expense, setExpense] = useState(() => {
    const storageExpense = JSON.parse(localStorage.getItem("expense"));
    return storageExpense || null;
  });

  const [expenses, setExpenses] = useState(() => {
    const storageExpenses = JSON.parse(localStorage.getItem("expenses"));
    return storageExpenses || [];
  });

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expense));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expense, expenses]);

  const storeExpense = (expenseData) => {
    setExpense(expenseData);
    setExpenses((prevExpenses) => [...prevExpenses, expenseData]);
  };

  const listExpenses = () => {
    const storageExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storageExpenses) {
      setExpenses(storageExpenses);
    }
  };

  const values = {
    expense,
    expenses,
    storeExpense,
    listExpenses,
  };

  return (
    <ExpenseContext.Provider value={values}>{children}</ExpenseContext.Provider>
  );
}



const UseExpense = () => {
  const context = useContext(ExpenseContext);
  return context;
};

export { ExpenseProvider, UseExpense };
