let h = document.querySelector(".h")
let text = document.querySelector(".text")
let text1 = document.querySelector(".text1")
let text2 = document.querySelector(".text2")

h.addEventListener("click",function(){
	text.classList.toggle("e")
	text1.classList.toggle("se")
})

let a = document.querySelector(".a")
let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")
let div4 = document.querySelector(".div4")

a.addEventListener("click",function(){
	let div2 = document.querySelector(".div2")
	div2.classList.toggle("ani")
	div3.classList.toggle("ani")
	div4.classList.toggle("anie")
})
let a1 = document.querySelector(".a1")
let img = document.querySelector(".img4")

a1.addEventListener("click",function(){
	img.classList.toggle("imgs")
})

let ull = document.querySelector(".ull")
let open = document.querySelector(".openMenuu")
let close = document.querySelector(".closeMenu")
let img4 = document.querySelector(".iphone")
let img3 = document.querySelector(".img")
let main = document.querySelector("main")
let aside = document.querySelector("aside")
let footer = document.querySelector("footer")
let h1 = document.querySelector(".h1")
let div9 = document.querySelector(".input1")
let btn12 = document.querySelector(".btn4")

open.addEventListener("click",function(){
	ull.style.display = "flex";
	ull.style.top = "0";
	main.style.display = "none"
	aside.style.display = "none";
	footer.style.display = "none";
	h1.style.display = "none";
	div9.style.display = "none";
	img4.style.display = "none";
	btn12.style.display = "none";
	img3.style.display = "none";
})
close.addEventListener("click",function(){
	ull.style.top = "-110%";
	main.style.display = "block";
	aside.style.display = "flex";
	footer.style.display = "flex";
	h1.style.display = "flex";
	div9.style.display = "flex";
	img4.style.display = "block";
	btn12.style.display = "block";
	img3.style.display = "block";
})

let a11 = document.querySelector(".a2")
let div21 = document.querySelector(".div10")
let div32 = document.querySelector(".div11")
let div42 = document.querySelector(".div12")

a11.addEventListener("click",function(){
	div21.classList.toggle("ase")
	div32.classList.toggle("asea")
	div42.classList.toggle("asesa")
})