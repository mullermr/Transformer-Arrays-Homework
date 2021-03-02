// Creating the wrapper var in Javascript
var wrapEle = document.body.querySelector(".wrapper");

// The given array of characters
var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

// The function that displays the character card
function displayTransformer(trnfmr){
  var ele = document.createElement("div");
  var img = document.createElement("img");
  ele.classList.add("character");
  
  // If statement testing if afl equal autobot then add so class and img src equals
  if(trnfmr.afl === "autobot"){
    ele.classList.add("autobot");
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  }
  else{
    ele.classList.add("decepticon");
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  }
  
  var nameEle = document.createElement("div");
  var classEle = document.createElement("div");
  var vehicleEle = document.createElement("div");
  nameEle.innerHTML = "Name: " + trnfmr.name;
  classEle.innerHTML = "Class: " + trnfmr.class.toUpperCase();
  vehicleEle.innerHTML = "Vehicle: " + trnfmr.vehicle;
  
  // If statement testing vehicle is such then color equals 
  if(trnfmr.vehicle === "truck"){
    vehicleEle.style.color = "blue";
  }
  else if(trnfmr.vehicle === "tank"){
    vehicleEle.style.color = "green";
  }
  else if(trnfmr.vehicle === "car"){
    vehicleEle.style.color = "gold";
  }
  else{
    vehicleEle.style.color = "white";
  }
  ele.appendChild(nameEle);
  ele.appendChild(classEle);
  ele.appendChild(vehicleEle);
  ele.appendChild(img);
  wrapEle.appendChild(ele);
}

// For loop that displays the cards the length of the array
for(var i = 0; i < chrs.length; i++){
  displayTransformer(chrs[i]);
}