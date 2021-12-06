const takeAChance = require('./take-a-chance');

const amILucky = takeAChance('Matt').then(res => console.log(res)).catch(err => console.log(err.message));
