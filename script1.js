function generateAccount() {
    
    
    // Generate a unique account number (example: randomly generated)
    var accountNumber = generateUniqueAccountNumber();
    
    // Get current date
    var currentDate = new Date().toLocaleDateString();

    // Fill the generated values into the form
    document.getElementById("accountnumber").value = accountNumber;
    document.getElementById("date").value = currentDate;

}

function generateUniqueAccountNumber() {
    // Generate a random number as an example
    return Math.floor(Math.random() * 1000000) + 1000;
}
