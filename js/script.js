document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!menuToggle || !navLinks) {
        console.error("Mobile menu elements not found.");
        return;
    }

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen.toString()
        );
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });
});