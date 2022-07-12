let cart ={};
$.getJSON('cars.json', function(data){
let cars_json = data;
checkCart();
showCart();
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
        out+= '<span>'+"FERRARI ROMA VINACCIA 1957 YEAR"+'</span>';
        out+= '<span>'+"RED"+'</span>';
        out+= '<span>'+"320000 $"+'</span>';
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
        out+='<div class="total-price">$549</div>';
        out+='</div>';
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
