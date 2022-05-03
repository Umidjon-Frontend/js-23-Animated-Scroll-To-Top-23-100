const btn = document.querySelector(".btn");
const rootEl = document.documentElement;

document.addEventListener("scroll",()=>{
    if (scrollY > 100) {
        btn.style.display = "block"
    }else{
        btn.style.display = "none"
    }
})

btn.addEventListener("click", () => {
    rootEl.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


