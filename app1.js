const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    window.location.href = "index.html"; // yaha home page ka path daal do
});

const elements = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight) {
            el.classList.add("show");
        }
    });
});

document.addEventListener("DOMContentLoaded" , ()=>{
    const mainBtn = document.querySelector(".btn1")
    mainBtn.addEventListener("click" , ()=>{
        window.location.href = "index4.html"
    })
})

document.addEventListener("DOMContentLoaded" , ()=>{
    const MenuBtn = document.querySelectorAll(".listBtn")
    MenuBtn.forEach(btn =>{
        btn.addEventListener("click" , ()=>{
            window.location.href = "index3.html"
        })
    })
})