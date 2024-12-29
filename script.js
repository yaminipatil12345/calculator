let input = document.querySelector('.inputBox');  // Select by class
let buttons = document.querySelectorAll('button');
let string = "";  // Initialize the string for calculation
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.textContent;  // Use textContent to get button text

        if (buttonText == '=') {
            try {
                string = eval(string);  // Evaluate the expression
                input.value = string;
            } catch {
                input.value = "Error";  // Display error if expression is invalid
            }
        } 
        else if (buttonText == 'AC') {
            string = "";  // Reset the string
            input.value = string;
        } 
        else if (buttonText == 'DEL') {
            string = string.substring(0, string.length - 1);  // Remove last character
            input.value = string;
        } 
        else {
            string += buttonText;  // Append button value to the string
            input.value = string;
        }
    });
});
