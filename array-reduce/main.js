const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const composite = traits.reduce((acc, curr) => {
  acc[Object.keys(curr)[0]] = Object.values(curr)[0];
  return acc;
});

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

class AccountManager {
  constructor(array) {
    this.records = array;
  }

  filterDeposits() {
    return this.records.filter(log => log.type === 'deposit');
  }

  calcDepositAmounts() {
    return this.filterDeposits().map(dollars => dollars.amount);
  }

  filterWithdrawals() {
    return this.records.filter(log => log.type === 'withdrawal');
  }

  calcWithdrawalAmounts() {
    return this.filterWithdrawals().map(dollars => dollars.amount);
  }

  calcBalance() {
    return this.calcDepositAmounts().reduce((acc, cur) => acc + cur) - this.calcWithdrawalAmounts().reduce((acc, cur) => acc + cur);
  }

}

const sum = numbers.reduce((acc, cur) => acc + cur);

const product = numbers.reduce((acc, cur) => acc * cur);

const openAccount = new AccountManager(account);

const accountBalance = openAccount.calcBalance();

console.log('accountBalance', accountBalance, 'sum', sum, 'product', product, 'balance', openAccount, 'composite', composite);
