/**
 * Created by Eishfaq on 6/18/2015.
 */
/*
var shafa = function(){
    console.log("Shafa is a bad boy!")
};

shafa();

setTimeout(shafa, 5000);
*/

//Order and Place
/*
function placeAndOrder(orderNumber){
    console.log("Order Number :",orderNumber);

    cookAndDeliver(function(){
       console.log("Deliver food Order :",orderNumber);
    });
}

function cookAndDeliver(callback){
    setTimeout(callback, 5000);
}

placeAndOrder(1);
placeAndOrder(2);
placeAndOrder(3);
placeAndOrder(4);

*/


//---===Reference===---
/*
var shafa = {
    favFood:"Burger",
    favMovie:"Prestige"
};

var person = shafa;

person.favFood = "salad";
console.log(shafa.favFood);
*/

// ---====Local and Global
/*
var shafa = {                            //local
    printName: function(){
        console.log("My name is shafa");
        console.log(this === shafa);
    }
};

shafa.printName();

function printAnotherName(){          //global
    console.log("\nhi!");
    console.log(this === global);
}

printAnotherName();

*/

/*
//--------======= A simple game=======---------

function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLive(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + " gave life to " + targetPlayer.name);
    }
}

var Shafa = new User();
var Munni = new User();

Shafa.name = "Shafa";
Munni.name = "Munni";

Shafa.giveLife(Munni);

console.log("Shafa's Life:" + Shafa.life);
console.log("Munni's Life" + Munni.life);

    //prototyping

User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
};

Munni.uppercut(Shafa);
console.log("Shafa's Life now :" + Shafa.life);
console.log("Munni's Life now :" + Munni.life);

//magic

User.prototype.m = 60;
console.log(Shafa.m);
console.log(Munni.m);
*/


