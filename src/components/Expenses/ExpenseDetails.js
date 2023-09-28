import "./ExpenseDetails.css";
const ExpenseDetails = (props) => {
  const title = props.title;
  const location = props.location;
  const amount = props.amount;
  const clickHandler = () => {
    console.log("clicked!!!");
  };
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h2>{location}</h2>
      <div className="expense-item__price">Rs {amount}</div>
      <button onClick={clickHandler}>Delete</button>
    </div>
  );
};
export default ExpenseDetails;
