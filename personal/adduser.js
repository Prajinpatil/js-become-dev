// TODO 0: Select your DOM elements outside or globally
const form = document.querySelector("#user-form");
const username = document.querySelector("#username");
const role = document.querySelector("#role");
const bio = document.querySelector("#bio");
const photo = document.querySelector("#photo");

const userManager = {
    users: [],

    // TODO 1: Initialize Event Listeners
    init: function () {
        form.addEventListener("submit",this.submitForm.bind(this));
        // Add a "submit" event listener to `form`.
        // CRITICAL: Bind `this` so `submitForm` retains reference to userManager, not form!
        // Hint: form.addEventListener("submit", this.submitForm.bind(this));
    },

    // TODO 2: Submit Form Handler
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
        // Prevent page reload
        // Call this.addUser()
    },

    // TODO 3: Add User to Internal Array
    addUser: function () {
        this.users.push({username:username.value, role:role.value, bio:bio.value,photo: photo.value});
        form.reset();
        this.renderUi();
        

        // Push a new user object to this.users using username.value, role.value, bio.value, photo.value
        // Call form.reset()
        // Call this.renderUi()
    },

    // TODO 4: Render UI Cards
    renderUi: function () {
        let usersContainer=document.querySelector('.users');
        usersContainer.innerHTML='';
        this.users.forEach((user, index) => {
            let cardHTML = `
    <div class="user-card">
        <img src="${user.photo}" alt="${user.username}">
        <div class="user-details">
            <h3>${user.username}</h3>
            <p><strong>Role:</strong> ${user.role}</p>
            <p>${user.bio}</p>
        </div>
        <button class="delete-btn" onclick="userManager.removeUser(${index})">Delete</button>
    </div>`;
    usersContainer.innerHTML+=cardHTML;
        });


        // Select container .users
        // Clear innerHTML to "" to avoid duplicate stacks
        // Loop through this.users (with index) and append card HTML
        // Attach click listeners or inline handlers to delete buttons calling removeUser
    },

    // TODO 5: Remove User
    removeUser: function (index) {
        this.users.splice(index,1);
        this.renderUi();
        // Use this.users.splice(index, 1) to remove user from state
        // Re-render the UI using this.renderUi()
    }
};

// Start application
userManager.init();