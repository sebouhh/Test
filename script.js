var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.getElementsByTagName("li"); // SH

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	deleteButton.addEventListener("click", function(){
		addEventsToButtons(this);
	})
	li.appendChild(deleteButton);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function myFunction(obj)
{
	obj.classList.toggle("done");
}

function addEventsToListItem()
{
	for (var i = 0; i < liList.length; i++){
		liList[i].addEventListener("click", function(){
			myFunction(this);
		})
	}
}

function addEventsToButtons(obj){
	console.log(obj.parentElement)
	obj.parentElement.remove();
}

function addButtonsNearListItems(){
	for (var i = 0; i < liList.length; i++){
		var deleteButton = document.createElement("button");
		deleteButton.innerHTML = "Delete";
		deleteButton.addEventListener("click", function(){
			addEventsToButtons(this);
		})
		liList[i].appendChild(deleteButton);

	}
}

addButtonsNearListItems();
addEventsToListItem();
