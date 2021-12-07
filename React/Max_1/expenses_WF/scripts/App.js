import Expense from "./Components/Expense.js";

const exp1 = Expense(new Date(2021, 2, 3), 'Almuerzo', 12000)
const exp2 = Expense(new Date(2021, 2, 3), 'Changua', 6200)
const exp3 = Expense(new Date(2021, 2, 3), 'Pasaje', 33200)
const exp4 = Expense(new Date(2021, 2, 3), 'Masaje', 20000)


document.getElementById('App').append(exp1, exp2, exp3, exp4);