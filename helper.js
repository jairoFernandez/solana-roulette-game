const getReturnAmount = (amount, rate) => {
  return amount * rate;
};

const totalAmtToBePaid = (amount, rate) => {
  return amount + getReturnAmount(amount, rate);
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
  getReturnAmount,
  totalAmtToBePaid,
  randomNumber,
};
