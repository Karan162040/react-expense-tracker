import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdtitle,
      amount: enterdAmount,
      date: new Date(enterddate),
      LocationOfExpenditure: enterdLocation,
    };
    props.onSaveExpenseData(expenseData);
    setenterdTitle("");
    setenterdAmount("");
    setenterdDate("");
  };
  const [enterdtitle, setenterdTitle] = useState("");
  const [enterdAmount, setenterdAmount] = useState("");
  const [enterddate, setenterdDate] = useState("");
  const [enterdLocation, setenterdLocation] = useState("");
  const titleChangeHandler = (event) => {
    setenterdTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setenterdAmount(event.target.value);
  };
  const locationChangeHandler = (event) => {
    setenterdLocation(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setenterdDate(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdtitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterdAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input
            type="text"
            value={enterdLocation}
            onChange={locationChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            value={enterddate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
