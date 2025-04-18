import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/expenseService";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpenses({ expenses }) {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      try {
        setIsFetching(true);
        const expenses = await fetchExpenses();
        setIsFetching(false);
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        console.error("Failed to load expenses:", error);
      }
    }

    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);
    const expenseDate = new Date(expense.date);

    return expenseDate >= sevenDaysAgo && expenseDate <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText={"No expenses registered for the last 7 days."}
    />
  );
}

export default RecentExpenses;
