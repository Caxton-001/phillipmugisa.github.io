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
        document.querySelector(".loader").classList.toggle("show")
        document.querySelector("body").classList.toggle("hidden")
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

try{
    gender_select.addEventListener("click", () => {
        gender_list.classList.toggle("show-filter")
    })
    brand_select.addEventListener("click", () => {
        brand_list.classList.toggle("show-filter")
    })
}
catch(err){
    // console.error(err)
}

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


//It also supports NodeList
if(window.innerWidth > 500)
{
    VanillaTilt.init(document.querySelector(".intro-pics"), {
        max: 15,
        speed: 400
    });
    VanillaTilt.init(document.querySelectorAll(".intro-pics"));    
}


const cartCountInput = document.querySelector("#cartCount");
const totalItemPrice = document.querySelector(".item-price");

document.querySelector("#decrease-count")
.addEventListener("click", (e) => {
    e.preventDefault();
    let cart_count = parseInt(cartCountInput.value) || 0;
    
    if (cart_count > 0)
    {
        let new_count = cart_count - 1
        cartCountInput.value = new_count;

        totalItemPrice.textContent = parseInt(totalItemPrice.textContent) - (parseInt(totalItemPrice.textContent) / cartCountInput.value)
    }
    

});
document.querySelector("#increase-count")
.addEventListener("click", (e) => {
    e.preventDefault();
    let cart_count = parseInt(cartCountInput.value) || 0;
    let new_count = cart_count + 1;
    cartCountInput.value = new_count;

    // change total price
    totalItemPrice.textContent = parseInt(totalItemPrice.textContent) + (parseInt(totalItemPrice.textContent) / cartCountInput.value)
});

