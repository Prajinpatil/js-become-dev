const form = document.querySelector("#auth-form");

// I have provided the Regex patterns for you so you don't have to type them manually!
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!\%*?&#^]{8,}$/;

form.addEventListener("submit", function(event) {
    // TODO 1: Prevent the default form submission so the page doesn't reload.
    event.preventDefault();
    // TODO 2: Create a let variable named `isValid` and set it to true. 
    // (We will assume the form is correct until proven otherwise).
    let isValid=true;

    // TODO 3: Reset the UI for a fresh submission.
    
    // Set both #emailError and #passwordError style.display back to "none".
    document.querySelector("#passwordError").style.display="none";
    document.querySelector("#emailError").style.display="none";
    // Set #resultMessage textContent back to an empty string "".
    document.querySelector("#resultMessage").textContent=""
    

    // TODO 4: Select the email and password inputs and grab their .value.
    let mail=document.querySelector("#email").value;
    let pass=document.querySelector("#password").value;

    // Then use emailRegex.test(yourEmailValue) and passwordRegex.test(yourPasswordValue).
    let mailans=emailRegex.test(mail);
    let passans=passwordRegex.test(pass);
    // Store the true/false results in variables (e.g., let emailans = ...).

    // TODO 5: Write an if statement to check if the email is NOT valid (!emailans).
    if(!mailans){
        document.querySelector("#emailError").textContent="Email is incorrect";
        document.querySelector("#emailError").style.display="initial";
        isValid=false;
    }
    // Inside it, set #emailError textContent to "Email is incorrect", 
    // change its style.display to "initial", and change isValid to false.

    // TODO 6: Write an if statement to check if the password is NOT valid (!passwordans).
    // Inside it, set #passwordError textContent to "Password is incorrect", 
    // change its style.display to "initial", and change isValid to false.
    if(!passans){
        document.querySelector("#passwordError").textContent="password is incorrect";
        document.querySelector("#passwordError").style.display="initial";
        isValid=false;
    }

    // TODO 7: Write a final if statement checking if isValid is still true.
    // Inside it, set the #resultMessage textContent to "Everything is correct".
    if(isValid){
        document.querySelector("#resultMessage").textContent="Everything is correct";
    }

});