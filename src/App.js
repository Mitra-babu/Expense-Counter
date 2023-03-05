import React from "react";
import "./App.css";
import NewExpenseComponent from "./components/Expenses/NewExpenseComponent";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const App = () => {
  // const para=document.createElement('p');
  // para.textContent="this is also visible";
  // document.getElementById('root').append(para)
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance 1",
      amount: 5500,
      date: new Date(2022, 1, 6),
    },
    {
      id: "e2",
      title: "Car Insurance 2",
      amount: 5200,
      date: new Date(2022, 1, 6),
    },
    {
      id: "e3",
      title: "Car Insurance 3",
      amount: 5900,
      date: new Date(2022, 1, 6),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(NewExpenseComponent, { items: expenses })
  // );

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <NewExpenseComponent items={expenses} />
    </div>
  );
};

export default App;
