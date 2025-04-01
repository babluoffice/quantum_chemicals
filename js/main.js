$(document).ready(function(){
    $('.home_slider').slick({
        dots: true,            // Show navigation dots
        infinite: true,        // Infinite loop
        speed: 500,            // Slide transition speed
        slidesToShow: 1,       // Show 1 slide at a time
        slidesToScroll: 1,     // Scroll 1 slide at a time
        autoplay: true,        // Auto-slide
        autoplaySpeed: 3000,   // Slide change speed
        arrows: true,  
    });
  });

  let lastScrollTop = 0;
  const header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll Down -> Hide Header
        header.style.transform = "translateY(-100%)";
    } else {
        // Scroll Up -> Show Header
        header.style.transform = "translateY(0)";
        
        // If at the top of the page, keep the original background
        if (scrollTop === 0) {
            // header.style.backgroundColor = "rgba(0, 0, 0, 0.1)"; // Original color
        } else {
            header.style.backgroundColor = "rgba(255, 255, 255, 1)"; // White background
        }
    }

    lastScrollTop = scrollTop;
});


document.getElementById("openSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("-translate-x-full");
  });

  document.getElementById("closeSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").classList.add("-translate-x-full");
  });
  document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownContent = document.getElementById("dropdown-content");

    // Toggle dropdown on button click
    dropdownBtn.addEventListener("click", function () {
      dropdown.classList.toggle("active");
    });

    // Select an option
    dropdownContent.addEventListener("click", function (e) {
      if (e.target.dataset.value) {
        dropdownBtn.innerHTML = `${e.target.innerText} <i class="fa-solid fa-globe"></i>`;
        dropdown.classList.remove("active");
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  });