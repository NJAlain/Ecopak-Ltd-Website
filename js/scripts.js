// Add functionality as needed
console.log("ECOPAK LTD Website Loaded!");
// script.js

function toggleDetails(button) {
    // Get the product details section (next sibling)
    var details = button.nextElementSibling;
    
    // Toggle visibility
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";  // Show details
        button.textContent = "Hide Details";  // Change button text
    } else {
        details.style.display = "none";  // Hide details
        button.textContent = "View Details";  // Change button text
    }
}
/* function that will include nav and footer */
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /* Search for elements with a certain attribute: */
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

includeHTML();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formAlert = document.getElementById('formAlert');
    formAlert.classList.remove('d-none', 'alert-danger');
    formAlert.classList.add('alert-success');
    formAlert.innerText = "Thank you for your message. We'll get back to you soon!";
});



