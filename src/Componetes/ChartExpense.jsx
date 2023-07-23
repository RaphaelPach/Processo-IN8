import _ from "lodash";
import { BarChart, Bar, Cell, XAxis, Tooltip, Pie, PieChart } from "recharts";
import { UseExpense } from "../Hooks/UseExpense";
import BottomNavigation from "./BottomNavigation";
import NavBar from "./NavBar";
import { useMediaQuery } from "react-responsive";

const COLORS = [
  "#01579b",
  "#ea580c",
  "#ffab00",
  "#ad1457",
  "#5d970c",
  "#701a75",
];

const ExpenseStatistics = () => {
  const { expenses } = UseExpense();
  const isIn768 = useMediaQuery({ query: "(max-width: 768px)" });
  console.log("=>", isIn768);
  // Calcular as estatísticas de despesas por categoria
  const stats = expenses.reduce((acc, expense) => {
    if (!acc[expense.categories]) {
      acc[expense.categories] = 0;
    }
    acc[expense.categories] += expense.value;
    return acc;
  }, {});
  console.log("===>", stats);
  const categories = Object.keys(stats);

  // Calcular o total de despesas
  const total = _.sum(Object.values(stats));

  // Calcular as porcentagens de cada categoria
  const percentages = _.mapValues(stats, (value) =>
    ((value / total) * 100).toFixed(2)
  );

  // Preparar os dados para o gráfico
  const chartData = categories.map((category, index) => ({
    name: category,
    value: stats[category],
    color: COLORS[index % COLORS.length],
  }));

  return (
    <>
      <NavBar />
      <BottomNavigation />
      <div className="w-full mt-10 max-w-xl md:max-w-4xl mx-auto flex flex-col items-center gap-8">
        <h2 className="text-2xl font-bold text-slate-700">
          Despesas por categoria
        </h2>
        <div className="w-full flex justify-center overflow-hidden">
          {!isIn768 ? (
            <BarChart width={800} height={300} data={chartData}>
              <XAxis dataKey="name" />
              <Bar
                dataKey="value"
                fill="#8884d8"
                label={({ value }) => `${value}`}
                barSize={30}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
              <Tooltip />
            </BarChart>
          ) : (
            <PieChart width={400} height={200}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8 text-slate-700 mt-10">
            Porcentagem por categoria
          </h3>
          <ul className="space-y-2">
            {categories
              .map((category) => ({
                category,
                percentage: parseFloat(percentages[category]),
                color: chartData.find((data) => data.name === category)?.color,
              }))
              .sort((a, b) => b.percentage - a.percentage)
              .map(({ category, percentage, color }, i) => (
                <li key={i} className={"flex justify-between bg-gray-200 "}>
                  <span className="font-medium" style={{ color }}>
                    {category}
                  </span>{" "}
                  <span style={{ color }}>{percentage.toFixed(2)}%</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExpenseStatistics;
