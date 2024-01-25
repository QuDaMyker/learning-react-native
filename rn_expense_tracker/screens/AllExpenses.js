import { Text } from "react-native";
import ExpenseOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useState } from "react";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
  const expenseCtx = useContext(ExpensesContext);
  return (
    <ExpenseOutput
      expenses={expenseCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default AllExpenses;
