
function add() {
	var n1 = Number(document.getElementById('num1').value);
	var n2 = Number(document.getElementById('num2').value);

	document.getElementById('result').innerHTML = "Answer is: " + Number(n1 + n2);
}

function sub(){
	var n1 = Number(document.getElementById('num1').value);
	var n2 = Number(document.getElementById('num2').value);

	document.getElementById('result').innerHTML = "Answer is: " + Number(n1 - n2);
}

function mult(){
	var n1 = Number(document.getElementById('num1').value);
	var n2 = Number(document.getElementById('num2').value);

	document.getElementById('result').innerHTML = "Answer is: " + Number(n1 * n2);
}

function div(){
	var n1 = Number(document.getElementById('num1').value);
	var n2 = Number(document.getElementById('num2').value);

	document.getElementById('result').innerHTML = "Answer is: " + Number(n1 / n2);
}

function mod(){
	var n1 = Number(document.getElementById('num1').value);
	var n2 = Number(document.getElementById('num2').value);

	document.getElementById('result').innerHTML = "Answer is: " + Number(n1 % n2);
}

function reset(){
	document.getElementById('num1').value = " ";
	document.getElementById('num2').value = " ";

	document.getElementById('result').innerHTML = " ";
}

// Dropdown javascript

function dropdown(){
	var x = document.getElementById('myDropdown')
	if(x.style.display==="none"){
		x.style.display="block"
	}
	else{
		x.style.display="none"
	}
}

