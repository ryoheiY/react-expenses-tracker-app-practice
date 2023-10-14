import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    { id: "e1", title: "TV", amount: "232", date: new Date(2022, 1, 2) },
    { id: "e2", title: "ANIME", amount: "12", date: new Date(2021, 1, 2) },
    { id: "e3", title: "TEST", amount: "12", date: new Date(2020, 1, 2) }
  ];

  const [stateExpenses, setStateExpenses] = useState(expenses);
  //setStateExpenses(expenses);
  const addExpenseHandler = (expense) => {
    console.log("in App.js");
    console.log(expense);
    setStateExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="expenses">
        <Expenses items={stateExpenses}></Expenses>
      </div>
    </div>
  );
}

export default App;
