const navbar = document.querySelector("nav");

document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";

    } else {
        navbar.style.backgroundColor = "white";
        navbar.style.boxShadow = "1px 1px 0 1px #f5f5f5";

    }
});

document.addEventListener("scroll")
