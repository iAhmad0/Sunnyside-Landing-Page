if (window.innerWidth < 1024) {
    const menu = document.querySelector("header .menu");

    const links = document.querySelector("header .links");
    links.classList.add("hidden");

    menu.addEventListener("click", () => {
        links.classList.toggle("hidden");
    });
}