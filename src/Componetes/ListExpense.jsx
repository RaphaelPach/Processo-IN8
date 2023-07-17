import { UseExpense } from "../Hooks/UseExpense";
import { useEffect } from "react";

function ListExpense() {
  const { listExpenses, expenses, storeExpense, deleteExpense } = UseExpense();

  /* useEffect(() => {}, [storeExpense]);

  useEffect(() => {
    listExpenses();
    console.log(listExpense);
  }, []); */

  return <div>
    <h1>Lista de despesas</h1>
  </div>;
}

export default ListExpense;
