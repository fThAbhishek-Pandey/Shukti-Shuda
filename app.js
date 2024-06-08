const btn = document.querySelector(".btn");
const body =document.querySelector("body");
btn.addEventListener('click',()=>{
    console.log("button clicked");
    body.classList.toggle("dark");
})
