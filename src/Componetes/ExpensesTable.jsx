import { UseExpense } from "../Hooks/UseExpense";
import { useEffect } from "react";

function ExpensesTable() {
  const { listExpenses, expenses, storeExpense } = UseExpense()
  
  useEffect(() => {
  },[storeExpense])

  useEffect(() => {
    listExpenses()

 },[])
  
  return (
    <table>
      <thead>
        <tr>
          <th>Valor</th>
          <th>Descrição</th>
          <th>Pagamento</th>
          <th>Categorias</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((item) => (
          <tr key={item.value}>
            <td>{item.value}</td>
            <td>{item.description}</td>
            <td>{item.payType}</td>
            <td>{item.categories}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpensesTable;
