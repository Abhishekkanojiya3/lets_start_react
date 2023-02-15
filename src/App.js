import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
    const expenses = [{
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
            location: 'Delhi',
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location: 'Delhi' },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
            location: 'Daunsa',
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
            location: 'Dehradun'
        },
    ];

    return ( <
        div >
        <
        NewExpense / > {
            /* <ExpenseItems title = {expenses[0].title} 
                  amount = {expenses[0].amount} 
                  date = {expenses[0].date}
                  location = {expenses[0].location}
                  ></ExpenseItems>
                  <ExpenseItems title = {expenses[1].title} 
                  amount = {expenses[1].amount} 
                  date = {expenses[1].date}
                  location = {expenses[1].location}
                  ></ExpenseItems>
                  <ExpenseItems title = {expenses[2].title} 
                  amount = {expenses[2].amount} 
                  date = {expenses[2].date}
                  location = {expenses[2].location}
                  ></ExpenseItems>
                  <ExpenseItems title = {expenses[3].title} 
                  amount = {expenses[3].amount} 
                  date = {expenses[3].date}
                  location = {expenses[3].location}
                  ></ExpenseItems> */
        }

        <
        Expenses expenses = { expenses }
        />

        <
        /div>
    );
}

export default App;