

var input = document.getElementById("searchbar");
var inputbtn = document.getElementById("searchbtn");
var output = document.getElementById("output");
let bimg = document.getElementById("bannerimage");
let bname = document.getElementById("banner_name");
let brecipe = document.getElementById("banner_recipe");
let cmt_btn = document.getElementById("cmt-btn");
let btn= document.getElementById("btn");
let cat = document.getElementById("cat");
let catul = document.getElementById("ul2");
let ul1 = document.getElementById("ul1");
let toggle = document.getElementById("toggle");window.onload = function(){
toggle.addEventListener("click",()=>{
    ul1.style.display = "flex";
    ul1.style.flexDirection = "column";
    ul1.style.backgroundColor = "palegreen";
    ul1.style.zIndex = "9999";
    setTimeout(()=>{
      ul1.style.display = "none";
    },10000)
})
cmt_btn.addEventListener("click",()=>{
  alert("Thank You for Your Reply");  
})
const dishes = [{
  img:"images/matar_paneer.jpg",
  name:"Matar Paneer",
  recipe:"Cook peas and paneer in tomato gravy."
},{
  img:"images/chicken_curry.jpg",
  name:"Chicken Curry",
  recipe:"Cook chicken with onion-tomato gravy and spices"
},{
  img:"images/pani_puri.jpg",
  name:"Pani Puri",
  recipe:"Stuff puris with potatoes and serve with spicy water"
}]
let i=1;
setInterval(()=>{
    bimg.src = dishes[i].img;
    bname.innerText = dishes[i].name;
    brecipe.innerText = dishes[i].recipe;
   
    i = (i+1)%3;
    btn.addEventListener("click",()=>{
      fetchInfo(dishes[i].name);
    })
},5000)
cat.addEventListener("click",()=>{
  catul.style.display = "flex";
})

btn.addEventListener("click",()=>{
  fetchInfo(dishes[(i-1)%3].name);
}) 
fetch(`/foods.json`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    
  })
  .catch(err => {
    console.error('error', err);
  });

  
}
function fetchData(){
  fetch(`foods.json`)
  .then(res => res.json())
  .then( data =>{
    let query = input.value;
    console.log(query);
    output.innerHTML = "";
    let i=1;
   data.forEach(data => {
    if(query == data.name){
        output.innerHTML = `<h1 style="text-align:center;font-size:4em;">${data.name}</h1><br>
        <div  id="output1" style="display:flex;"><img src="${data.image}" alt="${data.name}" style="height:500px;width:500px;border-radius:50%;"><br>
        <p style="font-size:2em;margin-top:190px;margin-left:100px;">${data.recipe}</p><br></div>`
        let j=0;

        for(j=0;j<data.ingredients.length;j++){
            let div = document.createElement("div");
            let ing = document.createElement("input");
            let ing1 = document.createElement("h1");
            ing.type = "checkbox";
            ing1.innerText = data.ingredients[j];
            output.appendChild(div);
            div.appendChild(ing);
            div.appendChild(ing1);
            div.style.display = "flex";
        }
        console.log(data.name);
        console.log(data.recipe);
        console.log(data.ingredients);
        i++;
    }
   });
   if(i==21){
    console.log('data not found');
   }
})
}
inputbtn.addEventListener("click",()=>{
    fetchData();
})
function fetchInfo(value){
  
  fetch(`foods.json`)
  .then(res => res.json())
  .then(data =>{
    console.log(value);
    output.innerHTML = "";
    let i=1;
   data.forEach(data => {
    if(value == data.name){
        output.innerHTML = `<h1 style="text-align:center;font-size:4em;">${data.name}</h1><br>
        <div style="display:flex;"><img src="${data.image}" alt="${data.name}" style="height:500px;width:500px;border-radius:50%;"><br>
        <p style="font-size:2em;margin-top:190px;margin-left:100px;">${data.recipe}</p><br></div>`
        let j=0;

        for(j=0;j<data.ingredients.length;j++){
            let div = document.createElement("div");
            let ing = document.createElement("input");
            let ing1 = document.createElement("h1");
            ing.type = "checkbox";
            ing1.innerText = data.ingredients[j];
            output.appendChild(div);
            div.appendChild(ing);
            div.appendChild(ing1);
            div.style.display = "flex";
        }
        console.log(data.name);
        console.log(data.recipe);
        console.log(data.ingredients);
        i++;
    }
   });
   if(i==21){
    console.log('data not found');
   }
});
    }
