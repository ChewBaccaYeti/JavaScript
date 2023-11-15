import transactionHistory from './data/transactions.js';
console.log(transactionHistory);

const makeTransactionTableRowMarkup = (transaction) => {
    const { id, amount, date, business, type, name, account } = transaction;

    return `
    <tr>
        <td>${id}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${business}</td>
        <td>${type}</td>
        <td>${name}</td>
        <td>${account}</td>
    </tr>
    `;
};

const tableEl = document.querySelector('.js-transaction-table');
const transactionTableRowsMarkup = transactionHistory
    .map(makeTransactionTableRowMarkup)
    .join('');

tableEl.insertAdjacentHTML('beforeend', transactionTableRowsMarkup);

console.log(transactionTableRowsMarkup);
