let btnToTop = document.getElementById("btnToTop");

window.onscroll = () => {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? (btnToTop.style.display = "block") : (btnToTop.style.display = "none");
};

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const menu = document.querySelector("#hamburger-menu");
const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});
