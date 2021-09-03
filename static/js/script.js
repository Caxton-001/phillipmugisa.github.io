const showToTop = () => {
    // window.scrollTo({ top: 0, behavior: 'smooth' })
    // console.log(document.documentElement.scrollTop)
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 10) {
        document.querySelector("#scrollTop").classList.add("show")
    } else {
        document.querySelector("#scrollTop").classList.remove("show")
    }
}
document.addEventListener("scroll", showToTop)

document.querySelector("#scrollTop")
.addEventListener("click", () => window.scrollTo({top:0, behavior: 'smooth'}))


const showLoader = () => {
    document.querySelector("body").style.overflow = "hidden"
    document.querySelector(".loader").classList.toggle("show")
    setTimeout(() => {
        document.querySelector("body").style.overflow = "auto"
        document.querySelector(".loader").classList.toggle("show")
    },2000)
}

const menu_btn = document.querySelector("#menu-btn");
const mb_tabs = document.querySelector(".mb-tabs");
menu_btn.addEventListener("click", () => {
    mb_tabs.classList.toggle("showMdTabs")
})

const hideMobileTabs = () => {
    document.querySelector(".mb-tabs").classList.remove("showMdTabs")
    showLoader()
}

document.querySelectorAll(".tabs a").forEach((tab) => {
    tab.addEventListener("click", hideMobileTabs,)
})

const gender_select = document.querySelector("#gender-select");
const gender_list = document.querySelector("#gender-list");
const brand_select = document.querySelector("#brand-select");
const brand_list = document.querySelector("#brand-list");

gender_select.addEventListener("click", () => {
    gender_list.classList.toggle("show-filter")
    // gender_list.style.display = gender_list.style.display === "none" ?
    //      "block" : "none";
})
brand_select.addEventListener("click", () => {
    brand_list.classList.toggle("show-filter")
    // brand_list.style.display = brand_list.style.display === "none" ?
    //      "block" : "none";
})

document.querySelectorAll(".gender-option").forEach((option) => {
    option.addEventListener("click", () => {
        gender_select.querySelector(".name").textContent = option.textContent;
        gender_list.classList.toggle("show-filter") 
        // gender_list.style.display = gender_list.style.display === "none" ?
        //      "block" : "none";
    })
})
document.querySelectorAll(".brand-option").forEach((option) => {
    option.addEventListener("click", () => {
        brand_select.querySelector(".name").textContent = option.textContent;
        brand_list.classList.toggle("show-filter") 
        // brand_list.style.display = brand_list.style.display === "none" ?
        //      "block" : "none";
    })
})

VanillaTilt.init(document.querySelector(".intro-pics"), {
    max: 15,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".intro-pics"));

