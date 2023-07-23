import { ExpenseProvider } from "./Hooks/UseExpense";
import { Route, Routes} from "react-router-dom";
import ChartExpense from "./Componetes/ChartExpense";
import Main from "./Pages/Main";

function App() {
  return (
    <ExpenseProvider>
        <div>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/grafico" element={<ChartExpense />} />
        </Routes>
        </div>
      </ExpenseProvider>
  );
}

export default App;
