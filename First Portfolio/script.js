// JavaScript to toggle navigation visibility when header is clicked
// document.querySelector('header').addEventListener('click', function() {
//     this.classList.toggle('clicked');
//   });
  
// document.addEventListener('DOMContentLoaded', function () {
//     const header = document.querySelector('header');
//     const menuToggle = document.querySelector('.menu-toggle');
  
//     menuToggle.addEventListener('click', function () {
//       header.classList.toggle('clicked');
//     });
//   });
  
//Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




function loadProjectDetails(projectId) {
    fetch(`./projects/${projectId}.html`)
        .then(response => response.text())
        .then(html => document.getElementById('project-detail').innerHTML = html)
        .catch(error => console.error('Error loading the project details:', error));
}




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate fields
    let email = document.getElementById('email').value;
    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        alert('Please enter a valid email address.');
        return;
    }
    // Submit the form
    this.submit();
});


