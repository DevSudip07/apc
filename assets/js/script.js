document.addEventListener("DOMContentLoaded", function () {
    // ✅ Navbar Toggle
    const bars = document.querySelector(".bars");
    const navMenu = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li a");

    bars.addEventListener("click", function () {
        this.classList.toggle("active");
        navMenu.classList.toggle("show");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            bars.classList.remove("active");  // menu click korle bars animation off
            navMenu.classList.remove("show"); // menu close
        });
    });



    
});
