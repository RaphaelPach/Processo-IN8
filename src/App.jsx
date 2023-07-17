import NavBar from "./Componetes/NavBar";
import BottomNavigation from "./Componetes/BottomNavigation";
import { ExpenseProvider } from "./Hooks/UseExpense";
import ExpensesTable from "./Componetes/ExpensesTable";

function App() {
  return (
    <ExpenseProvider>
      <div>
        <NavBar />
        <BottomNavigation />
        <ExpensesTable />
      </div>
    </ExpenseProvider>
  );
}

export default App;
