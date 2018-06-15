var showJob1 = document.getElementById('modal-job1'),
	showJob2 = document.getElementById('modal-job2'),
	showJob4 = document.getElementById('modal-job4'),
	showJob5 = document.getElementById('modal-job5'),
	btn1 = document.getElementById('btn1'),
	btn2 = document.getElementById('btn2'),
	btn4 = document.getElementById('btn4'),
	btn5 = document.getElementById('btn5');

function mostrar1(){
	showJob1.style.display = "block";
}

function mostrar2(){
	showJob2.style.display = "block";
}


function mostrar4(){
	showJob4.style.display = "block";
}

function mostrar5(){
	showJob5.style.display = "block";
}

document.getElementById('closeBtn').addEventListener('click', function(){
	showJob1.style.display = "none";
})

document.getElementById('closeBtn2').addEventListener('click', function(){
	showJob2.style.display = "none";
})


document.getElementById('closeBtn4').addEventListener('click', function(){
	showJob4.style.display = "none";
})

document.getElementById('closeBtn5').addEventListener('click', function(){
	showJob5.style.display = "none";
})

btn1.addEventListener('click', mostrar1);
btn2.addEventListener('click', mostrar2);
btn4.addEventListener('click', mostrar4);
btn5.addEventListener('click', mostrar5);




//SCROLL

var obtn1 = document.getElementById("head-btn1"),
	obtn2 = document.getElementById("head-btn2"),
	obtn3 = document.getElementById("head-btn3"),
	obtn4 = document.getElementById("head-btn4");

obtn1.addEventListener('click', function(){
	var port = document.getElementById('portafolio');
	port.scrollIntoView();
})

obtn2.addEventListener('click', function(){
	var know = document.getElementById('conoci');
	know.scrollIntoView();
})

obtn3.addEventListener('click', function(){
	var acer = document.getElementById('acerca');
	acer.scrollIntoView();
})

obtn4.addEventListener('click', function(){
	var contac = document.getElementById('contacto');
	contac.scrollIntoView();
})