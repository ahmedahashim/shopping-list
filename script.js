// var h1 = document.querySelector("h1");
// h1.style.color="red";
// h1.className="toolTitle";
// var button =document.getElementsByTagName('button')
// button[0].addEventListener("click", function(){
// 	alert("Hello")
// })

var button = document.getElementById('enter');
var input=document.getElementById('userinput');
var ul=document.querySelector("ul");
function inputLength() {
	return input.value.length;
}
function createListElement() {
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li)
	input.value="";
}
 function addListAfterClick(){
 	if(inputLength()>0){
	 createListElement() ;
 }
}
 function addListAfterKeypress(event){
 	if(inputLength()>0 && event.keyCode===13){
	 createListElement();
}
 }
button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeypress);