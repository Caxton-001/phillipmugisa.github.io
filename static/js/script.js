const menu_btn = document.querySelector("#menu-btn");
const mb_tabs = document.querySelector(".mb-tabs");
menu_btn.addEventListener("click", () => {
    mb_tabs.classList.toggle("showMdTabs")
})

const gender_select = document.querySelector("#gender-select");
const gender_list = document.querySelector("#gender-list");
const brand_select = document.querySelector("#brand-select");
const brand_list = document.querySelector("#brand-list");

gender_select.addEventListener("click", () => {
    gender_list.classList.toggle("show-filter")
    gender_list.style.display = gender_list.style.display === "none" ?
         "block" : "none";
})
brand_select.addEventListener("click", () => {
    brand_list.classList.toggle("show-filter")
    brand_list.style.display = brand_list.style.display === "none" ?
         "block" : "none";
})

document.querySelectorAll(".gender-option").forEach((option) => {
    option.addEventListener("click", () => {
        gender_select.querySelector(".name").textContent = option.textContent;
        gender_list.classList.toggle("show-filter") 
        gender_list.style.display = gender_list.style.display === "none" ?
             "block" : "none";
    })
})
document.querySelectorAll(".brand-option").forEach((option) => {
    option.addEventListener("click", () => {
        brand_select.querySelector(".name").textContent = option.textContent;
        brand_list.classList.toggle("show-filter") 
        brand_list.style.display = brand_list.style.display === "none" ?
             "block" : "none";
    })
})