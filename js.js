
var first_name = ["shawarma","fluff","tall","undefined","radical","ebony","moon","crazy","cool"]
var last_name = ["boi","nugget","homedog","moon","cupcake","ninja","eyes"]

function nicknameFunction() { 
  document.getElementById("nickname").innerHTML = "Your nickname is: " + first_name[Math.floor(Math.random()*first_name.length)]+" "+last_name[Math.floor(Math.random()*last_name.length)];
}