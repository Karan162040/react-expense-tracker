import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const ExpenseModal = (props) => {
  const [clicked, setClicked] = useState(false);
  const addNewExpenseHandler = (event) => {
    event.preventDefault();
    setClicked(true);
  };
  const cancelHandler = () => {
    setClicked(false);
  };

  return (
    <div>
      {clicked ? (
        <ExpenseForm
          onSaveExpenseData={props.onOpenModal}
          onCancelHandler={cancelHandler}
        />
      ) : (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default ExpenseModal;
