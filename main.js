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