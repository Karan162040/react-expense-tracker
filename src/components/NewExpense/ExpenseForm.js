import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    const myObj = {
      title: enterdtitle,
      amount: enterdAmount,
      date: new Date(enterddate),
    };
    console.log(myObj);
  };
  const [enterdtitle, setenterdTitle] = useState("");
  const [enterdAmount, setenterdAmount] = useState("");
  const [enterddate, setenterdDate] = useState("");
  const titleChangeHandler = (event) => {
    setenterdTitle(event.target.value);
    console.log(enterdtitle);
  };
  const amountChangeHandler = (event) => {
    setenterdAmount(event.target.value);
    console.log(enterdAmount);
  };
  const dateChangeHandler = (event) => {
    setenterdDate(event.target.value);
    console.log(enterddate);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
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
