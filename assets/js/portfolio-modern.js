
const menu=document.querySelector(".menu");
const nav=document.querySelector(".nav-links");
if(menu){
  menu.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menu.setAttribute("aria-expanded",open?"true":"false");
  });
}
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open"); menu?.setAttribute("aria-expanded","false");
}));
const year=document.querySelector("#year");
if(year) year.textContent=new Date().getFullYear();
