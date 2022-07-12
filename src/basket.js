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
        out+= '<li class="item"  id = "item">';
        out+= '<button  class="close" data-art = '+key+'>X</button>';
        out+= '<div class="image">'+
        '<img src="'+cars_json[key].immage+'" alt="" />'+
        '</div>'
        out+= '<div class="wrapper">';
        out+= '<div class="description">';
        out+= '<span>'+cars_json[key].name+' '+ cars_json[key].year+ ' YEAR'+'</span>';
        out+= '<span>'+cars_json[key].availability+'</span>';
        out+= '<span>'+cars_json[key].price+"$"+'</span>';
        out+= '</div>';
        out+= '<div class="quantity">';
        out+='<button class="plus-btn" type="button" data-art = '+key+' name="button">';
        out+='<img src="./img/plus.svg" alt="" />';
        out+='</button>';
        out+='<input type="text" name="name" value="'+cart[key]+'">';
        out+='<button class="minus-btn" type="button" data-art = '+key+' name="button">';
        out+='<img src="./img/minus.svg" alt="" />';
        out+='</button>';
        out+='</div>';
        out+='<div class="total-price">'+"$"+(cars_json[key].price*cart[key])+'</div>';
        out+='</div>';
        sum.push(cars_json[key].price*cart[key]);
        out+= '</li>';
       
    }
    $('#shopping-cart').html(out);
    $('button.plus-btn').on('click',plusGoods);
    $('button.minus-btn').on('click',minusGoods);
    $('button.close').on('click',close_cart);
}
function plusGoods(){
    let articul =$(this).attr('data-art');
    saveCartLS();
    showCart();
}
function minusGoods(){
    let articul =$(this).attr('data-art');
    if(cart[articul]>1){
    cart[articul]--;
}
    else{
        delete cart[articul];
    }
    saveCartLS();
    showCart();
}
function close_cart(){
    let articul = $(this).attr('data-art');
    console.log("jvhvjb")
    delete cart[articul];
    saveCartLS();
    checkCart();
    showCart();
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


  
function saveCartLS(){
    localStorage.setItem('cart',JSON.stringify(cart));
}