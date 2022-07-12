let cart ={};
let sum =[];
const summa_car = document.querySelector('.suma');
$.getJSON('cars.json', function(data){
let cars_json = data;
checkCart();
showCart();
addSum();
function showCart(){
    let out ="";
    for(let key in cart){
        out+= '<li class="item" id = "item">';
        out+= '<a href="#" class="close">X</a>';
        out+= '<div class="image">'+
        '<img src="'+cars_json[key].immage+'" alt="" />'+
        '</div>'
        out+= '<div class="wrapper">';
        out+= '<div class="description">';
        out+= '<span>'+cars_json[key].name+' '+ cars_json[key].year+ ' YEAR'+'</span>';
        out+= '<span>'+cart[key]+'</span>';
        out+= '<span>'+cars_json[key].price+"$"+'</span>';
        out+= '</div>';
        out+= '<div class="quantity">';
        out+='<button class="plus-btn" type="button" name="button">';
        out+='<img src="./img/plus.svg" alt="" />';
        out+='</button>';
        out+='<input type="text" name="name" value="1">';
        out+='<button class="minus-btn" type="button" name="button">';
        out+='<img src="./img/minus.svg" alt="" />';
        out+='</button>';
        out+='</div>';
        out+='<div class="total-price">'+"$"+(cars_json[key].price*cart[key])+'</div>';
        out+='</div>';
        sum.push(cars_json[key].price*cart[key]);
        let summa = (sum.reduce((a,b) => a+b));
        out+= '</li>';
    }
    $('#shopping-cart').html(out);

}
})


function checkCart(){
    if(localStorage.getItem('cart')!=null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}
function addSum(){
    summa_car.innerHTML = sum.reduce((a,b) => a+b);  
  } 
