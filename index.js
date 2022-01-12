const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const nextButton = document.querySelector('#next-btn');
const checkButton = document.querySelector('#check-btn');
const errorMessage = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll('.no-of-notes');

const errorType1 =
    'Error: Input field can not be empty or negative. Please fill correct details.',
  errorType2 =
    'Error: do you want to wash plates ? Enter cash amount greater than bill amount.',
  availableNotes = [2000, 500, 100, 20, 10, 5, 1];

const hideFunction = (isMsg) => {
  if (!isMsg) {
    errorMessage.style.display = 'none';
  } else {
    isMsg.style.display = 'none';
    isMsg.style.display = 'none';
  }
};

hideFunction(cashGiven);
hideFunction(checkButton);

const showMessage = (msg) => {
  errorMessage.style.display = 'block';
  errorMessage.innerText = msg;
};

const showCashInputField = () => {
  if (Number(billAmount.value) > 0) {
    hideFunction();
    hideFunction(nextButton);
    checkButton.style.display = 'block';
    cashGiven.style.display = 'block';
  } else {
    showMessage(errorType1);
  }
};

const validateBillAndCashAmount = () => {
  hideFunction();
  if (Number(cashGiven.value) > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const remainingAmount = cashGiven.value - billAmount.value;
      calculateChange(remainingAmount);
    } else {
      showMessage(errorType2);
    }
  } else {
    showMessage(errorType1);
  }
};

const calculateChange = (remainingAmount) => {
  for (let i = 0; i < availableNotes.length; i++) {
    const NumberOfNotes = Math.trunc(remainingAmount / availableNotes[i]);
    remainingAmount %= availableNotes[i];
    noOfNotes[i].innerText = NumberOfNotes;
  }
};

nextButton.addEventListener('click', showCashInputField);
checkButton.addEventListener('click', validateBillAndCashAmount);
