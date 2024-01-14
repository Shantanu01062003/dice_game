document.querySelector(".img1").getAttribute


const arr = [];

arr[0] = "./images/dice1.png";
arr[1] = "./images/dice2.png"
arr[2] = "./images/dice3.png"
arr[3] = "./images/dice4.png"
arr[4] = "./images/dice5.png"
arr[5] = "./images/dice6.png"

var n = Math.random();
n *= 6;
n = Math.floor(n);

var m = Math.random();
m *= 6;
m = Math.floor(m);

if(m<n){
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Player2 Wins";
}


document.querySelector(".img1").setAttribute("src",arr[n]);
document.querySelector(".img2").setAttribute("src",arr[m]);
