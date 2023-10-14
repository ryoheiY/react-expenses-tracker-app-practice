import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  let expenseContent;
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses!</h2>;
  }
  if (props.filteredExpenses.length > 0) {
    expenseContent = props.filteredExpenses.map((item) => {
      return (
        <ExpenseItem
          key={item.title}
          date={item.date}
          title={item.title}
          amount={item.amount}
        ></ExpenseItem>
      );
    });
  }

  return <ul className="expenses-list">{expenseContent}</ul>;
}

export default ExpensesList;
