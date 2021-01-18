let colorInput=document.querySelector('#color');
let hexInp=document.querySelector('#hex');
let text=document.querySelector('#color1');
let hexInp2=document.querySelector('#hex1');
let buttoncopy=document.querySelector('#copy');
let buttoncopy2=document.querySelector('#copy2');

colorInput.addEventListener('input',()=>{
	let color=colorInput.value.toUpperCase();
	hexInp.value=color;
	document.body.style.backgroundColor=color;
	
});

text.addEventListener('input',()=>{
	let color2=text.value.toUpperCase();
	hexInp2.value=color2;
	document.querySelector('#text').style.color=color2;
});

buttoncopy.onclick=function () {
	hexInp.select();
	document.execCommand("copy");
	
	
}

buttoncopy2.onclick=function () {
	hexInp2.select();
	document.execCommand("copy");
}