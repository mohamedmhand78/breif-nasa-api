let input = document.getElementById("input");
let btn = document.getElementById("btn")
let results = document.getElementById("results")
let section = document.querySelector("section")
let obj = {}
btn.addEventListener("click", function () {
 if (input.value !== "") {
  let apilink = `https://images-api.nasa.gov/search?q=${input.value}`;
  section.innerHTML=""
fetch(apilink)
     .then(data => data.json())
     .then(data => obj = {...data})
     .then(data => {
      
      obj.collection.items.forEach(element => {
      section.innerHTML += `<div class="box">
      <img src=${element.links[0]?.href} alt="">
      <h1>${element.data[0]?.title}</h1>
      <p>${element.data[0]?.description}</p>
  </div>`;  
     })}
     )
 } 

 else {
  alert("Type a word to searsh")
 }
})