function toggle() {
    const menuBtn = document.querySelector(".menu-btn");
    menuBtn.classList.toggle("active");

    const menu = document.querySelector(".menu");
    menu.classList.toggle("menu-active");
}

window.addEventListener('scroll', function () {
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle('sticky', window.scrollY > 0);
})

