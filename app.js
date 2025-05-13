    document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    // Toggle mobile menu visibility
    mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    // Smooth scrolling and hide menu after clicking a link
    document.querySelectorAll('#mobile-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);

        if (targetId === "home") {
            // Scroll to the top of the page for "Home"
            window.scrollTo({
            top: 0,
            behavior: "smooth",
            });
        } else {
            // Scroll to the target section
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            }
        }

        // Hide the mobile menu after clicking a link
        mobileMenu.classList.add("hidden");
        });
    });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        }
        });
    });
    document.getElementById("mobile-menu-button").addEventListener("click", function () {
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.toggle("hidden");
    });
    document.getElementById("home-link").addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        // Toggle mobile menu visibility
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");
    
        mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        });
    
        // Smooth scrolling for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            }
    
            // Hide the mobile menu after clicking a link
            if (!mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
            }
        });
        });
    });