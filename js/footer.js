console.log("Hello, Underworld.");

// This gets the element with the id footer
let footer = document.getElementById('footer');

// This gets the last modified date
let lastModified = new Date(document.lastModified);

// This gets the year
let year = lastModified.getFullYear();

// This gets the month
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[lastModified.getMonth()];

// This gets the day
let day = lastModified.getDate();
// This finds and sets the suffix of the day
let daySuffix;
if (day % 10 == 1) {
    daySuffix = "st";
} else if (day % 10 == 2) {
    daySuffix = "nd";
} else if (day % 10 == 3) {
    daySuffix = "rd";
} else {
    daySuffix = "th";
}

// This sets the footer text
footer.innerText = "Last modified: " + month + " " + day + daySuffix + ", " + year;

