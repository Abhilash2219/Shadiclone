// Get the modal
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission (optional)
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    // Perform login validation here
    
    // Close the modal after submission
    modal.style.display = "none";
});




// Get the modal elements
var loginModal = document.getElementById("loginModal");
var joinNowModal = document.getElementById("joinNowModal");

// Get the buttons that open the modals
var loginBtn = document.getElementById("loginBtn");
var joinNowBtn = document.getElementById("joinNowBtn");

// Get the <span> elements that close the modals
var loginSpan = loginModal.querySelector(".close");
var joinNowSpan = joinNowModal.querySelector(".close");

// When the user clicks the button, open the respective modal
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

joinNowBtn.onclick = function() {
    joinNowModal.style.display = "block";
}

// When the user clicks on <span> (x), close the respective modal
loginSpan.onclick = function() {
    loginModal.style.display = "none";
}

joinNowSpan.onclick = function() {
    joinNowModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == joinNowModal) {
        joinNowModal.style.display = "none";
    }
}
