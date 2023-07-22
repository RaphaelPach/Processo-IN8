import { ExpenseProvider } from "./Hooks/UseExpense";
import ExpensesTable from "./Componetes/ExpensesTable";
import { Route, Routes} from "react-router-dom";
import ChartExpense from "./Componetes/ChartExpense";

function App() {
  return (
    <ExpenseProvider>
        <div>
        <Routes>
          <Route exact path="/" element={<ExpensesTable />} />
          <Route path="/grafico" element={<ChartExpense />} />
        </Routes>
        </div>
      </ExpenseProvider>
  );
}

export default App;
