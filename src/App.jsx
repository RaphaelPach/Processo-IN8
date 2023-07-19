/* import NavBar from "./Componetes/NavBar";
import BottomNavigation from "./Componetes/BottomNavigation"; */
import { ExpenseProvider } from "./Hooks/UseExpense";
import ExpensesTable from "./Componetes/ExpensesTable";
import { Route, Routes} from "react-router-dom";
/* import PieExpenses from "./Componetes/PieExpenses"; */
import ChartExpense from "./Componetes/ChartExpense";

function App() {
  return (
    <ExpenseProvider>
        <div>
          {/* <NavBar />
          <BottomNavigation /> */}
          {/* <ExpensesTable /> */}
        <Routes>
          <Route exact path="/" element={<ExpensesTable />} />
          <Route path="/grafico" element={<ChartExpense />} />
        </Routes>
        </div>
      </ExpenseProvider>
  );
}

export default App;
