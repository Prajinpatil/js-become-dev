
// The data array provided in the tutorial
const users = [
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop", 
        bio: "silent chaos in a loud world 🖤 | not for everyone"
    },
    {
        name: "kiara mehta",
        pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop",
        bio: "main character energy ☕️ | coffee > everything ✨"
    },
    {
        name: "isha oberoi",
        pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop",
        bio: "walking through dreams in doc martens ☁️ | late night thinker"
    },
    {
        name: "Ojin Oklawa",
        pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop",
        bio: "too glam to give a damn 💅 | filter free soul"
    }
];

// TODO 1: Select the DOM elements
// - Select the container where cards will go (#cards-container)
let con=document.querySelector('#cards-container');
let searchInput=document.querySelector('#search-input');
// - Select the search input field (#search-input)


// TODO 2: Create a function called renderCards(dataArray)
let renderCards=function(arr){
    con.innerHTML='';
    arr.forEach(user => {
let cardHTML = `
<div class="card">
        <img src="${user.pic}" class="bg-img" />
        
        <div class="blurred-layer" style="background-image: url('${user.pic}')"></div>
        
        <div class="content">
            <h3>${user.name}</h3>
            <p>${user.bio}</p>
        </div>
    </div>
    `;
    con.innerHTML+=cardHTML;
    });

}
// - Inside the function, first set the container's innerHTML to an empty string ("") so it clears out old cards.
// - Use dataArray.forEach() to loop through the users.
// - Inside the loop, build the HTML for a card using a template literal (``).
// - Append that HTML to the container using +=.
// (Hint: Don't forget the inline style for the blurred-layer background image!)


// TODO 3: INITIAL LOAD
// - Call your renderCards() function and pass the original `users` array into it so all cards display immediately.


// TODO 4: REAL-TIME SEARCH
// - Add an "input" event listener to your search box.
searchInput.addEventListener('input',function(){
let typedtext=searchInput.value.toLowerCase();
let filteredUsers=users.filter(function(user){
    return user.name.toLowerCase().includes(typedtext);
});
if (typedtext===''){
        renderCards([]);
    }
    else{
renderCards(filteredUsers);
    }

});


// - Inside the listener, get the search box's .value and convert it to lowercase.
// - Use the .filter() method on the original `users` array. 
// - Inside the filter, return true if the user's name (converted to lowercase) .includes() the search value.
// - Save this filtered data to a new variable (e.g., let filteredUsers = ...).
// - Call renderCards() again, but pass in your new filtered variable!