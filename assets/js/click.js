var image = document.getElementById("dogepic");
var button = document.getElementById("doge");

button.onclick = function(){

    if(dogepic.className == "clicked"){
        dogepic.className = "";
    } else{
        dogepic.className = "clicked";
    }

};