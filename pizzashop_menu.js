var x = ["Margherita","Pizza Friends Pepperoni Special","Ham & Pineapple","Meat Feast","Vivacious Vegetarian","Chocolate"];

var y = [5.5,6.75,6,7.25,6.75,5];

var z = [7,7.75,7.5,9,8.5,5.5];

document.getElementById("takeaway").onclick = function()
{
for (var i = 0; i < 6; i++) {

if (document.getElementById("item"+(i+1)).innerHTML = x[i]){

document.getElementById("price"+(i+1)).innerHTML = "£"+y[i].toFixed(2);
}
}
};
document.getElementById("eat-in").onclick = function()
{
for (var i = 0; i < 6; i++) {

if (document.getElementById("item"+(i+1)).innerHTML = x[i]){

document.getElementById("price"+(i+1)).innerHTML = "£"+z[i].toFixed(2);
}
}
};

/* Alternative approach to above:
document.getElementById("takeaway").onclick = function()
{

document.getElementById("price1").innerHTML = "£"+y[0].toFixed(2)
document.getElementById("price2").innerHTML = "£"+y[1].toFixed(2)
document.getElementById("price3").innerHTML = "£"+y[2].toFixed(2)
document.getElementById("price4").innerHTML = "£"+y[3].toFixed(2)
document.getElementById("price5").innerHTML = "£"+y[4].toFixed(2)
document.getElementById("price6").innerHTML = "£"+y[5].toFixed(2)

}
document.getElementById("eat-in").onclick = function()
{

document.getElementById("price1").innerHTML = "£"+z[0].toFixed(2)
document.getElementById("price2").innerHTML = "£"+z[1].toFixed(2)
document.getElementById("price3").innerHTML = "£"+z[2].toFixed(2)
document.getElementById("price4").innerHTML = "£"+z[3].toFixed(2)
document.getElementById("price5").innerHTML = "£"+z[4].toFixed(2)
document.getElementById("price6").innerHTML = "£"+z[5].toFixed(2)

}
 */