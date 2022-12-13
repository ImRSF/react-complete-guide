<<<<<<< HEAD
import "./ExpenseItem.css"

const ExpenseItem = () => {
    const expenseDate = new Date(2022, 2, 28);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 294.67


    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
=======
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
>>>>>>> af0fdf72fb9ff4f294110a2ff058b7019e12e856
};

export default ExpenseItem;
