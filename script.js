// open the sidebar
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu-btn");
    const sidebar = document.querySelector(".side-bar-responsive");

    // Toggle the sidebar when the hamburger icon is clicked
    hamburgerMenu.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // Close the sidebar if clicked outside (optional)
    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});