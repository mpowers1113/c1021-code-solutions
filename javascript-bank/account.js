/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var newTransaction = new Transaction('deposit', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var newTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  var deposits = 0;
  var withdrawals = 0;

  if (this.transactions.length === 0) {
    return 0;
  }

  for (var i = 0; i < this.transactions.length; i++) {
    var eachTransaction = this.transactions[i];
    if (eachTransaction.type === 'deposit') {
      deposits += eachTransaction.amount;
    } else {
      withdrawals += eachTransaction.amount;
    }
  }
  balance = deposits - withdrawals;
  return balance;
};
