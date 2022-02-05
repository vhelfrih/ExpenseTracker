import "./App.css";
import Balance from "./components/Balance";
import Categories from "./components/Categories";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpenses />
      <Categories />
      <ExpenseList />
    </div>
  );
}

export default App;
