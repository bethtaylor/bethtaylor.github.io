var button = document.getElementById('sendbutton');
button.onclick = function () {
	document.getElementById('thankyou').style.display = 'block';
	document.getElementById('xbutton').style.display = 'block';
}
document.getElementById('xbutton').onclick = function (){
	document.getElementById('thankyou').style.display = 'none';
	document.getElementById('xbutton').style.display = 'none';
	document.getElementById('contactform').reset();
}
