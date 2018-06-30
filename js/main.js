var operators = ['+', '-', 'x', '*', '/'];
var livesrc = true;

    function init(){
    livesrc = false;
    pWr.value = 'ON';
}    

function powerOn() {
	livesrc = true;
 document.getElementById('thumb').value  = "0" ;
 document.getElementById('thumb').style.backgroundColor = 'turquoise';
 document.getElementById('pWr').style.color = 'turquoise';
pWr.value = 'ON';
 }
 
function powerOff() {
	livesrc = false;
document.getElementById('thumb').value  = "" ;
document.getElementById('thumb').style.backgroundColor = '#cac9b4';
document.getElementById('pWr').style.color = 'white'
pWr.value = 'ON'
}
 
 function numerO(num){
 	if (livesrc === false)thumb.value= '';
if (livesrc === true){
 if (thumb.value === '0')thumb.value= '';
thumb.value += num;
}
}
 
function btnPlus() {
	if (livesrc === false)thumb.value= '';
if (livesrc === true){
	if (thumb.value === '0')return thumb.value += "";
	if(operators.indexOf('+') > -1) {
			var lastChar =thumb.value[thumb.value.length - 1];
			
			if(thumb.value != '' && operators.indexOf(lastChar) == -1) 
				thumb.value += '+';
if (thumb.value === '')return;	
}
}
}

function btnSub() {
	if (livesrc === false)thumb.value= '';
if (livesrc === true){
	if (thumb.value === '0')return;
	if(operators.indexOf('-') > -1) {
			var lastChar =thumb.value[thumb.value.length - 1];
			
					if(thumb.value != '' && operators.indexOf(lastChar) == -1) 
				thumb.value += '-';
	if(thumb.value == '') return thumb.value += "-";
}
}
}

function btnMult() {
	if (livesrc === false)thumb.value= '';
if (livesrc === true){
	if (thumb.value === '0')return;
	if(operators.indexOf('*') > -1) {
			var lastChar =thumb.value[thumb.value.length - 1];
			if(thumb.value != '' && operators.indexOf(lastChar) == -1) 
				thumb.value += '*';
	if(thumb.value == '') return ;
}
}
}

function btnDiv() {
	if (livesrc === false)thumb.value= '';
if (livesrc === true){
	if (thumb.value === '0')return;
    if(operators.indexOf('/') > -1) {
			var lastChar =thumb.value[thumb.value.length - 1];
			
					if(thumb.value != '' && operators.indexOf(lastChar) == -1) 
				thumb.value += '/';
	if(thumb.value == '') return ;
}
}
}

function btnDec() {
	if (livesrc === false)thumb.value= '';
if (livesrc === true){
	  if (thumb.value.indexOf('.') === -1)
document.getElementById('thumb').value += ".";
}
}

function calC() {
	if (livesrc === false)thumb.value= '';
if (livesrc === true){
document.getElementById('thumb').value = eval (document.getElementById('thumb').value);
}
}

function cleaR(){
	thumb.value= thumb.value.substring(0,thumb.value.length-1);
}
window.onload = init;