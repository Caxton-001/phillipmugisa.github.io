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
    document.querySelector("body").classList.toggle("hidden")
    document.querySelector(".loader").classList.toggle("show")
    setTimeout(() => {
        document.querySelector("body").classList.toggle("hidden")
        document.querySelector(".loader").classList.toggle("show")
    },2000)
}

const menu_btn = document.querySelector("#menu-btn");
const mb_tabs = document.querySelector(".mb-tabs");
menu_btn.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("hidden")
    mb_tabs.classList.toggle("showMdTabs")
})

const hideMobileTabs = () => {
    document.querySelector("body").style.overflow = "auto"
    document.querySelector(".mb-tabs").classList.remove("showMdTabs")
    showLoader()
}

document.querySelectorAll(".mb-tabs a").forEach((tab) => {
    tab.addEventListener("click", hideMobileTabs,)
})

const gender_select = document.querySelector("#gender-select");
const gender_list = document.querySelector("#gender-list");
const brand_select = document.querySelector("#brand-select");
const brand_list = document.querySelector("#brand-list");

gender_select.addEventListener("click", () => {
    gender_list.classList.toggle("show-filter")
})
brand_select.addEventListener("click", () => {
    brand_list.classList.toggle("show-filter")
})

document.querySelectorAll(".gender-option").forEach((option) => {
    option.addEventListener("click", () => {
        gender_select.querySelector(".name").textContent = option.textContent;
        gender_list.classList.toggle("show-filter") 
    })
})
document.querySelectorAll(".brand-option").forEach((option) => {
    option.addEventListener("click", () => {
        brand_select.querySelector(".name").textContent = option.textContent;
        brand_list.classList.toggle("show-filter") 
    })
})

VanillaTilt.init(document.querySelector(".intro-pics"), {
    max: 15,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".intro-pics"));

