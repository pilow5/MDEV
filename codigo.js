const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

const enviar = document.querySelector("#enviar");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
	let sliderSectionFirst= document.querySelectorAll(".slider-section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend', sliderSectionFirst);
		slider.style.marginLeft = "-100%";
	}, 500);
}

function Previous() {
	let sliderSection = document.querySelectorAll(".slider-section");
	let sliderSectionLast = sliderSection[sliderSection.length - 1];

	slider.style.marginLeft = "0";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterbegin', sliderSectionLast);
		slider.style.marginLeft = "-100%";
	}, 500);
}

function Alert() {
	// prevent
	document.alert("formulario enviado con éxito");
}

btnRight.addEventListener("click", function(){
	Next();
})

btnLeft.addEventListener("click", function(){
	Previous();
})

enviar.addEventListener("click",function(){
	Alert();
})

setInterval(function(){
	Next();
}, 10000);



