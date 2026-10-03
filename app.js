const moonBtn = document.querySelector(".moon");
const themeIcon = moonBtn.querySelector("img");
const filterBtns= document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");
const removeBtns = document.querySelectorAll(".remove-btn");

let currentFilter = "all";

function applyTheme(isDark){
    document.body.classList.toggle("dark",isDark);
    themeIcon.src =isDark?"icon-sun.svg":"icon-moon.svg";
    themeIcon.alt = isDark?"sun":"moon";
    localStorage.setItem("theme",isDark?"dark":"light");
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

applyTheme(localStorage.getItem("theme") === "dark");

moonBtn.addEventListener("click",() => {
    applyTheme(!document.body.classList.contains("dark"));
});

function showCards(){
    cards.forEach((card) => {
        const isOn = card.querySelector(".form-check-input").checked;

        let show = true;
        if(currentFilter === "active")  show = isOn;
        if(currentFilter === "inactive") show = !isOn;

        card.style.display = show ? "" : "none";
    });
}

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;

        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        showCards();
    });
});

cards.forEach((card) => {
    card.querySelector(".form-check-input").addEventListener("change",showCards);
});

removeBtns.forEach((btn) => {
    btn.addEventListener("click",() => {
        btn.closest(".card").remove();
    });
});