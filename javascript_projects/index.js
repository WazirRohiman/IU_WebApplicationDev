// Get the input elements and the results element from the DOM
const principalInput = document.getElementById('principal');
const interestRateInput = document.getElementById('interestRate');
const loanTermInput = document.getElementById('loanTerm');
const calculateBtn = document.getElementById('calculateBtn');
const resultsElement = document.getElementById('results');

// Attach a click event listener to the Calculate button
calculateBtn.addEventListener('click', () => {
    const principal = parseFloat(principalInput.value);
    const annualInterestRate = parseFloat(interestRateInput.value);
    const loanTerm = parseInt(loanTermInput.value);

    const monthlyPayment = calculateMonthlyPayment(principal, annualInterestRate, loanTerm);

    displayResults(monthlyPayment);
});

// Function to calculate the fixed monthly payment
function calculateMonthlyPayment(principal, annualInterestRate, loanTerm) {
    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const totalPayments = loanTerm * 12;

    const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    return monthlyPayment;
}

// Function to display the results
function displayResults(monthlyPayment) {
    if (isNaN(monthlyPayment)) {
        resultsElement.innerHTML = 'Please provide valid input values.';
    } else {
        resultsElement.innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    }
}
