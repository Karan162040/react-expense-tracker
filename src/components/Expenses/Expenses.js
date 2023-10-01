import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense) => {
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
    </Card>
  );
};
export default Expenses;
