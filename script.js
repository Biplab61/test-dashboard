// Add hover class selected list items

let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) =>
        item.classList.remove('hovered'));
        this.classList.add('hovered');
}
list.forEach((item) => 
item.addEventListener('mouseover',activeLink));

// NabBar Toggle 
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function () {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}


var divs = ["dashboard", "machine1", "machine2", "machine3","machine4","machine5"];
var visibleId = null;
function show(id) {
  if(visibleId !== id) {
    visibleId = id;
  } 
  hide();
}
function hide() {
  var div, i, id;
  for(i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if(visibleId === id) {
      div.style.display = "inline-grid";
    } else {
      div.style.display = "none";
    }
  }
}  