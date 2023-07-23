import { UseExpense } from "../Hooks/UseExpense";

function NavBar() {
  const { expenses } = UseExpense();

  const total = expenses
    .reduce((acc, curr) => {
      return acc + curr.value;
    }, 0)
    .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  return (
    <div
      className="flex justify-between items-center w-full h-20
    px-8 text-white bg-[rgb(202,86,150)] shadow-lg"
    >
      <span className="font-bold text-5xl">IN-WALLET</span>
      <span className="font-bold text-5xl text-Second">{total}</span>
    </div>
  );
}

export default NavBar;
