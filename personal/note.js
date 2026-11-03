// Target Elements
const cardsWrapper = document.querySelector("#cards-wrapper");
const noteForm = document.querySelector("#note-form");
const addBtn = document.querySelector("#add-btn");
const closeModalBtn = document.querySelector("#close-modal-btn");
const modalOverlay = document.querySelector("#modal-overlay");

// Up and Down Buttons
const upBtn = document.querySelector("#up-btn");
const downBtn = document.querySelector("#down-btn");

// ==========================================
// TARGET 2: LOCAL STORAGE HANDLING
// ==========================================

function getNotesFromStorage() {
    let tasks = localStorage.getItem("tasks");
    // If storage is empty (null), return a blank array
    if (tasks === null) {
        return [];
    } else {
        return JSON.parse(tasks);
    }
}

function saveNotesToStorage(notesArray) {
    // Convert array to string and save it to local storage
    localStorage.setItem("tasks", JSON.stringify(notesArray));
}


// ==========================================
// RENDERING & STACK LOGIC (3 Cards Only)
// ==========================================

function renderNotes(notesArray) {
    // Clear old cards before rendering to avoid duplicates appending to the bottom
    cardsWrapper.innerHTML = ""; 

    notesArray.forEach(function(note) {
        let cardHTML = `
            <div class="card ${note.category}">
                <div class="card-header">
                    <img src="${note.pic}" class="avatar">
                    <div>
                        <h3>${note.name}</h3>
                        <div class="card-details">
                            <span>${note.hometown}</span>
                            <span>${note.purpose}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cardsWrapper.innerHTML += cardHTML;
    });

    // Update the stack positioning after rendering the HTML
    updateStack();
}

function updateStack() {
    const cards = document.querySelectorAll(".card");
    
    // Loop runs for all cards, but only styles the first 3 to be visible
    for (let i = 0; i < cards.length; i++) {
        if (i < 3) {
            // The first card gets the highest z-index (3)
            cards[i].style.zIndex = 3 - i; 
            // Each subsequent card gets pushed down (10px) and scaled down slightly
            cards[i].style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.05})`; 
            // Each subsequent card gets slightly more transparent
            cards[i].style.opacity = 1 - (i * 0.2);
            cards[i].style.display = "block";
        } else {
            // Hide all cards after the 3rd one so they don't peek out the bottom
            cards[i].style.display = "none";
        }
    }
}


// ==========================================
// UP / DOWN BUTTON LOGIC
// ==========================================

upBtn.addEventListener("click", function() {
    const lastChild = cardsWrapper.lastElementChild;
    if (lastChild) {
        // Take the last card and insert it at the very top (before the first child)
        cardsWrapper.insertBefore(lastChild, cardsWrapper.firstElementChild);
        updateStack();
    }
});

downBtn.addEventListener("click", function() {
    const firstChild = cardsWrapper.firstElementChild;
    if (firstChild) {
        // Take the first card and append it to the very bottom
        cardsWrapper.appendChild(firstChild);
        updateStack();
    }
});


// ==========================================
// TARGET 1 & 3: FORM VALIDATION & MODAL
// ==========================================

addBtn.addEventListener("click", () => modalOverlay.classList.remove("hidden"));
closeModalBtn.addEventListener("click", () => modalOverlay.classList.add("hidden"));

noteForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // 1. Validation (Removing extra spaces with .trim())
    const imgUrl = document.querySelector("#img-url").value.trim();
    const fullName = document.querySelector("#full-name").value.trim();
    const homeTown = document.querySelector("#home-town").value.trim();
    const purpose = document.querySelector("#purpose").value.trim();
    
    const categoryRadios = document.querySelectorAll('input[name="category"]');
    let selectedCategory = false;
    let categoryValue = "";
    
    // Check which radio button is currently selected
    categoryRadios.forEach(radio => {
        if (radio.checked) {
            selectedCategory = true;
            categoryValue = radio.value;
        }
    });

    // Prevent submission if any text field is empty after trimming spaces
    if (imgUrl === "" || fullName === "" || homeTown === "" || purpose === "") {
        alert("Please fill all fields.");
        return; 
    }

    if (!selectedCategory) {
        alert("Please select a category.");
        return;
    }

    // 2. Data Saving
    const newNote = {
        id: Date.now(),
        pic: imgUrl,
        name: fullName,
        hometown: homeTown,
        purpose: purpose,
        category: categoryValue
    };

    const currentNotes = getNotesFromStorage();
    currentNotes.push(newNote); // Add new note to the array
    saveNotesToStorage(currentNotes); // Save the updated array back to storage

    // 3. Form Reset & UI Update
    noteForm.reset(); 
    modalOverlay.classList.add("hidden"); 
    
    // Re-render the screen with the new data
    renderNotes(currentNotes);
});

// INITIAL LOAD
renderNotes(getNotesFromStorage());