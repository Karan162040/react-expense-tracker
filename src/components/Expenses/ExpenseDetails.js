import { useState } from "react";
import "./ExpenseDetails.css";
const ExpenseDetails = (props) => {
  const location = props.location;

  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const clickHandler1 = () => {
    setTitle("Updated");
  };
  const clickHandler2 = () => {
    setAmount(100);
  };
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h2>{location}</h2>
      <div className="expense-item__price">Rs {amount}</div>
      <button onClick={clickHandler2}>Change Amount</button>
      <button onClick={clickHandler1}>Change Title</button>
    </div>
  );
};
export default ExpenseDetails;
