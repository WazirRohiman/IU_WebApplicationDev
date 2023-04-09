
// import readline module to read and write data from terminal
const readline = require('readline').createInterface({
  //interface for reading data from a readable stream
  input: process.stdin,
  //interface to write data to a writable stream
  output: process.stdout
});

//define 'askQuestion' function for easier control using async/await syntax when asking for user input in terminal.
//'query' parameter represents the text that will be displayed as a prompt to the user
function askQuestion(query) {
  //The 'askQuestion' function return a new Promise
  //'Promise' is an object that takes a single executor function parameter 'resolve'
  //'resolve' function fulfills the promise with a resulting value
  return new Promise((resolve) => {
    //wrap 'readline.question' method is part of the readline module that parses two parameters 'query' and 'answer'
    //'query' parameter is displayed as a prompt to the user
    //'answer' is a callback function that will be displayed when the user provides input
    readline.question(query, (answer) => {
      //call the 'resolve' function and pass the 'answer' call back function
      //this fulfills the promise with the user's input
      resolve(answer);
    });
  });
}


//the function below executes the calculation of the monthly payment
//the function takes in the input parameters provided by the user
function calculateMonthlyPayment(principal, annualInterestRate, loanTerm) {
  //the constant variable monthlyInterestRate stores for the value for the calculation of the annual rate divided by 12 to find the monthly rate
  const monthlyInterestRate = (annualInterestRate / 100) / 12;
  //the constant variable totalPayments stores the value for the calculation of the 'loan term' times 12 to find the total number of months
  const totalPayments = loanTerm * 12;

  //the line below computes the monthly loan repayment using the following mathematical equation
  // m = p*((r*((1+r)^n))/(((1+r)^n) - 1)) where,
  // m is the month repayment
  // p is the principal
  // r is the monthlyInterestRate
  // n is the totalPayments
  const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  //the function returns the value of the monthlyPayment variable
  return monthlyPayment;
}

//define 'displayResults' function by parsing the value of the monthlyPayment variable
function displayResults(monthlyPayment) {
  //if statement to check if a number is returned from the monthlyRepayment variable
  if (isNaN(monthlyPayment)) {
    //if not-a-number then print the following to the terminal
    console.log('Please provide valid input values.');
  } else {
    //else print the following if a number
    console.log(`Monthly Payment: $${monthlyPayment.toFixed(2)}`);
  }
}

//Define the main function as an 'async' function which allow the use of 'await' to handle user input
async function main() {
  //create a constant variable principle to store the following
  //use the 'askQuestion' function to store the user input using the await function
  //parse the query to be displayed inside of the 'askQuestion' function
  //the input is saved as a float-number usign the 'parseFloat' function
  //apply same principle for 'principle' and 'annualInterestRate' and parse as integer for 'loanTerm'
  const principal = parseFloat(await askQuestion('Principal: '));
  const annualInterestRate = parseFloat(await askQuestion('Annual Interest Rate (%): '));
  const loanTerm = parseInt(await askQuestion('Loan Term (Years): '));

  //once the main is run the above will take in as input and store them in the constant variables assigned
  //the 'calculateMonthlyPayment' function parses the input provided by the users as parameters
  //the function will calculate the values and save the result in a constant variable called 'monthlyPayment'
  const monthlyPayment = calculateMonthlyPayment(principal, annualInterestRate, loanTerm);

  //the result is then displayed on the terminal using the 'displayResults' function
  displayResults(monthlyPayment);
  
  //the readline function is then closed
  readline.close();
}



//call 'main' function to start the script
main();