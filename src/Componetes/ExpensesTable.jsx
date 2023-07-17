import { UseExpense } from "../Hooks/UseExpense";
import { useEffect } from "react";

function ExpensesTable() {
  const { listExpenses, expenses, storeExpense, deleteExpense } = UseExpense();

  useEffect(() => {}, [storeExpense]);

  useEffect(() => {
    listExpenses();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Categorias</th>
          <th>Pagamento</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((item) => (
          <tr key={item.value}>
            <td>{item.description}</td>
            <td>{item.categories}</td>
            <td>{item.payType}</td>
            <td>{item.value}</td>
            <td>
              <button onClick={() => deleteExpense(item.id)}>Deletar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpensesTable;