import "./ExpenseList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let filterdExpensesData = props.items;
  if (filterdExpensesData.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  } else if (filterdExpensesData.length === 1) {
    return (
      <ul className="expense-list">
        <ExpenseItem
          key={filterdExpensesData[0].id}
          title={filterdExpensesData[0].title}
          amount={filterdExpensesData[0].amount}
          date={filterdExpensesData[0].date}
          location={filterdExpensesData[0].LocationOfExpenditure}
        />
        <h2 className="expenses-list__fallback">
          Only single Expense here. Please add more.
        </h2>
      </ul>
    );
  } else {
    return (
      <ul className="expenses-list">
        {filterdExpensesData.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              location={expense.LocationOfExpenditure}
            />
          );
        })}
      </ul>
    );
  }
};
export default ExpenseList;
