// 1. Select the form and the empty cards container
const form = document.querySelector('#user-form');
const container = document.querySelector('#cards-container');

// 2. Listen for the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // TODO 1: Prevent the default form submission so the page doesn't reload.
let inputs=document.querySelectorAll('#user-form input[type="text"]');
let pic=inputs[0].value;
let name=inputs[1].value;
let occ=inputs[2].value;
let info=inputs[3].value;
    // TODO 2: Select all four input fields using querySelector 
    // and store their current '.value' in variables.
let cardhtml=`
<div class="card">
        <img src="${pic}" alt="${name}">
        <h3>${name}</h3>
        <h4>${occ}</h4>
        <p>${info}</p>
    </div>
`
    // TODO 3: Create a variable holding a Template Literal (backticks ` `).
    // Write the HTML for a single card inside it, and use ${} to inject 
    // the variables you created in Step 2.
    // Example layout:
    // <div class="card">
    //    <img src="..." alt="Profile Pic">
    //    <h3>...</h3>
    //    <h4>...</h4>
    //    <p>...</p>
    // </div>
container.innerHTML+=cardhtml;
    // TODO 4: Take the HTML string you just created and append it to 
    // the container.innerHTML. (Hint: use += so you don't delete previous cards).
form.reset();
    // TODO 5: Reset the .value of all your input fields back to an empty string ('')
    // so the form is instantly ready for a new user.
});