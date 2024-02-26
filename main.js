// main.js

// Function to prompt user for their name and display in the output div
function promptForName() {
    var userName = prompt("Please enter your name:");
    document.getElementById("output").innerHTML = "Hello, " + userName + "!";
}

// Function to enlarge the clicked image
function enlargeImage() {
    var image = document.getElementById("profile-image");
    image.style.width = "500px"; // Change this value to your desired enlargement
}

// Function to handle onmouseover event for navigation items
function onNavMouseOver(element) {
    element.style.color = "blue"; // Change the color or add your desired onmouseover effect
}

// Function to handle onmouseout event for navigation items
function onNavMouseOut(element) {
    element.style.color = "black"; // Change the color or add your desired onmouseout effect
}

function mOver(some_tag) {
    some_tag.innerHTML = "Thank You";
    some_tag.style.color = "blue";
    }
function mOut(element) {
    some_tag.innerHTML = "Hello! I'm Apishaa, who are you?";
    some_tag.style.color = "orange";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    }
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
    }
    }
    }
    }