import "./NewExpense.css";
import ExpenseModal from "./ExpenseModal";
const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseModal onOpenModal={saveExpenseHandler} />
    </div>
  );
};
export default NewExpense;
