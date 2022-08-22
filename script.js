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


var divs = ["dashboard", "machine1", "machine2"];
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
      div.style.width = "100%";
    } else {
      div.style.display = "none";
    }
  }
}  



// Oxygen Graph chart

const ctxM1 = document.getElementById('oxygen-graph-m1').getContext('2d');
const ctxM2 = document.getElementById('oxygen-graph-m2').getContext('2d');

//  Machine2

const oxygenGrapgM1 = new Chart(ctxM1, {
    type: 'line',
    data: {
        labels: ["4:30 PM", "4:35 PM", "4:40 PM" , "4:45 PM" , "4:50 PM", "4:55 PM", "5:00 PM"],
        datasets: [{
            label: 'Oxygen Value',
            data: [98, 95, 93, 92, 99, 84 ,91],
            backgroundColor: 'transparent',
            borderColor: 'blue',
            borderWidth: 2
            
        }]
    },
    options: {
        responsive: true,
        elements:{
          line:{
            tension:0
          }
        }
    }
});


// Machine 2

const oxygenGrapgM2 = new Chart(ctxM2, {
  type: 'line',
  data: {
    labels: ["5:00 PM", "5:05 PM", "5:10 PM" , "5:15 PM" , "5:20 PM", "5:25 PM", "5:30 PM"],
      datasets: [{
          label: 'Oxygen Value',
          data: [94, 96, 93, 91, 86, 57 ,77],
          backgroundColor: 'transparent',
          borderColor: 'blue',
          borderWidth: 2
          
      }]
  },
  options: {
      responsive: true,
      elements:{
        line:{
          tension:0
        }
      }
  }
});
