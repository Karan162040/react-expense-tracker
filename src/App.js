import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: "Super Market,Dhanbad",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      LocationOfExpenditure: "Reliance Smart,Dhanbad",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 2940.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: "Policy Bazar,Dhanbad",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: "Ply House,Dhanbad",
    },
  ];
  return (
    <div>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.LocationOfExpenditure}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
