 var container;
var x;
var d=0;
function AddItem()
{
if(d!==10)
{
d++;
container = document.createElement("li"); 
var data = document.getElementById("input").value;
container.innerHTML='<div id="div-' + d + '">'+data+'<img src="Delete.png" onclick ="RemoveItem(this)" id="deleteimg"></div>';
var listcreate = document.getElementById("listForm");
listcreate.appendChild(container);
}
else if(d >=10)
{
alert("List is full please delete some item");
}
}
function RemoveItem(control)
{	
control.parentNode.remove('listForm container');
d--;
}