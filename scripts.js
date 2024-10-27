const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  // Check for missing inputs
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }
  
  // Convert inputs to numbers
  const numDividend = Number(dividend);
  const numDivider = Number(divider);
  
  // Check for non-numeric input
  if (isNaN(numDividend) || isNaN(numDivider)) {
    result.innerText = "Something critical went wrong. Please reload the page.";
    console.error("Non-numeric input encountered. Please check the inputs.");
    document.body.innerHTML = result.innerText;  // Replace the entire screen
    return;
  }
  
  // Handle division by zero
  if (numDivider === 0) {
    result.innerText = "Division not performed. Invalid number provided.Please Try again.";
    console.error("Error: Divided by zero. Check the divider input.");
    return;
  }
  
 
  const divisionResult = numDividend / numDivider;
  if (Number.isInteger(divisionResult)) {
    result.innerText = divisionResult;  // Whole number result
  } else {er part for decimal result
  }
    result.innerText = Math.floor(divisionResult);  // Display only the integ
});
