import { UseExpense } from "../Hooks/UseExpense";
import { useEffect } from "react";
import NewModal from "./NewModal";

function ExpensesTable() {
  const { listExpenses, expenses, storeExpense, deleteExpense } = UseExpense();

  useEffect(() => {}, [storeExpense]);

  useEffect(() => {
    listExpenses();
  }, []);

  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
      max-w-[1080px] m-auto my-4"
      >
        {expenses.map((item) => (
          <div
            key={item.value}
            className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center justify-between gap-4"
          >
            <div className="flex justify-between w-full">
               {item.data}
              <NewModal
                deleteExpense={deleteExpense}
                id={item.id}
                name={item.description}
              />
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
