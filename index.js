const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-btn');
const errorMessage = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll('.no-of-notes');

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function validateBillAndCashAmount() {
  hideMessage();
  if (Number(billAmount.value) > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const remainingAmount = cashGiven.value - billAmount.value;
      calculateChange(remainingAmount);
    } else {
      showMessage(
        'Error: do you want to wash plates ? Enter cash amount greater than bill amount.'
      );
    }
  } else {
    showMessage('Error: Amount should be greater than zero');
  }
}

function calculateChange(remainingAmount) {
  for (let i = 0; i < availableNotes.length; i++) {
    const NumberOfNotes = Math.trunc(remainingAmount / availableNotes[i]);
    remainingAmount %= availableNotes[i];
    noOfNotes[i].innerText = NumberOfNotes;
  }
}

function hideMessage() {
  errorMessage.style.display = 'none';
}

function showMessage(msg) {
  errorMessage.style.display = 'block';
  errorMessage.innerText = msg;
}

checkButton.addEventListener('click', validateBillAndCashAmount);
