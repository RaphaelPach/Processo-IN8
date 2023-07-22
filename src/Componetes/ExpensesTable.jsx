import { UseExpense } from "../Hooks/UseExpense";
import { useEffect } from "react";
import NavBar from "./NavBar";
import BottomNavigation from "./BottomNavigation";

function ExpensesTable() {
  const { listExpenses, expenses, storeExpense, deleteExpense } = UseExpense();

  useEffect(() => {}, [storeExpense]);

  useEffect(() => {
    listExpenses();
  }, []);

  return (
    <>
      <NavBar />
      <BottomNavigation />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
      max-w-[1080px] m-auto my-4"
      >
        {expenses.map((item) => (
          <div
            key={item.value}
            className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center justify-between gap-4"
          >
            <div className="flex justify-end w-full">
              <button
                onClick={() => deleteExpense(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L10 10.586 5.707 6.293a1 1 0 00-1.414 1.414L8.586 12l-4.293 4.293a1 1 0 101.414 1.414L10 13.414l4.293 4.293a1 1 0 001.414-1.414L11.414 12l4.293-4.293a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col justify-start w-full">
              <h2 className="text-lg font-medium text-gray-800">
                {item.description}
              </h2>
              <p className="text-sm text-gray-500">{item.categories}</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-gray-700 font-medium">{item.payType}</p>
              <p className="text-gray-700 font-bold">R${item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ExpensesTable;
