var link = document.querySelector(".write-us");

var popup = document.querySelector(".write-us-hidden");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name =  popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var storage = localStorage.getItem("name");

link.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.add("active");

	if (storage) {
		name.value = storage;
		email.focus();
	}
	else{
		name.focus();
	}
});
close.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("active");
	popup.classList.remove("error");
});

form.addEventListener("submit", function(evt){
	if (!name.value || !email.value) {
		evt.preventDefault();
		popup.classList.remove("error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("error");
	}else{
		localStorage.setItem("name", name.value);
	}
});

window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
		if (popup.contains("active")) {
			popup.classList.remove("active");
			popup.classList.remove("error");
		}
	}
});