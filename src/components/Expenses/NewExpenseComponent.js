import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";

const NewExpenseComponent = (props) => {
  // <h1>Lets get started</h1>
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangehandler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default NewExpenseComponent;
