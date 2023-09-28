import Expenses from "./components/Expenses/Expenses";
const App = () => {
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
  return <Expenses items={expenses} />;
};

export default App;
