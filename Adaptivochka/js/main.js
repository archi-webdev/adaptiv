const tabsPtms = document.querySelectorAll(".tabs_nav button")
// console.log(tabsPtms);

const tabsItms = document.querySelectorAll(".tabs__item");
console.log(tabsItms);

//  функция скрывает табы 
function hideTabs() {
    tabsItms.forEach(item => item.classList.add("hide"));
    tabsPtms.forEach(item => item.classList.remove("active"));
}

hideTabs();

function showTab(index) {
    tabsItms[index].classList.remove("hide"); 
    tabsPtms[index].classList.add("active");

}

showTab(0);

tabsPtms.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));


// якорные ссылки 

const anTers = document.querySelectorAll(".header__nav a");

anTers.forEach(anc => {
    anc.addEventListener("click", function(event) {
    event.preventDefault();


    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);

    window.scroll({
    top: elem.offsetTop - 80,
    behavior: "smooth" 
    });

    });
});