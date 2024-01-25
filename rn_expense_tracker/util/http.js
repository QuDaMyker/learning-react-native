import axios from "axios";
const BACKEND_URL =
  "https://rn-expense-tracker-ee52e-default-rtdb.asia-southeast1.firebasedatabase.app";
export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + "/expense.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expense.json");

  const expenses = [];

  if (response.status === 200) {
    for (const key in response.data) {
      const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description,
      };
      expenses.push(expenseObj);
    }
    return expenses;
  }
}

export function upateExpense(id, expenseData) {
  return axios.post(BACKEND_URL + `/expense/${id}.json`, expenseData);
}

export async function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expense/${id}.json`);
}
