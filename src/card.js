let basket_car = {};
 let carcard = document.querySelector('.car_card');
 $('document').ready(function(){
    loadcars();
    checkCart();
    showCart()
});
let  carr_array = [];

    function loadcars (){
    let out='';
     $.getJSON('cars.json', function(data){
    
        for(let key in data){
        carr_array.push(new Cars (key, data[key].carhref,data[key]['immage'], data[key].name, data[key].price,data[key].year, data[key]['collor'],data[key].producer,data[key].run,data[key].fuel,data[key].interior,data[key].engine,data[key].dispersal,data[key].transmission));

        }
        for(let cars of carr_array){
            out+='<li class = '+cars.art+'>';
            out+= '<button href="#" class = "drive" title="Buy" data-art = "'+cars.art+'">'+"&#9989"+'</button>';
            out+= '<a href='+cars.carhref+' class = "link_car"><img src = "'+cars.immage+'" alt="" class = "img_car"></img></a>';
            out+= '<div class="name_year">'+'<h1 class = "name">'+cars.name+ '&nbsp'+'</h1>'+ '<h1>'+ cars.year+ ' YEAR'+'</h1>'+'</div>';
            out+= '<h2 class = "carprice">'+"$"+cars.price+'<h2>'
             out+='<p>'+ cars.year+" /"+cars.collor+" /"+cars.run+"km /"+cars.fuel+" /"+cars.engine+"sec" + '</p>';
              out+='</li>'
        }
        $('#properties_list').html(out);
        $('button.drive').on('click',addToCart);
    })
}

// фильтр єлементов
    const formSerach = document.getElementById('search_model');
    formSerach.addEventListener('submit', (e) => {
        e.preventDefault();
        const fData = new FormData(search_model);
        const search_m = fData.get('search').toLocaleUpperCase();
        for(let cars of carr_array){
            if(search_m != cars.producer.toLocaleUpperCase()){
                document.querySelector('.'+cars.art).classList.add("active_prod")   
            }
            if(search_m == cars.producer.toLocaleUpperCase()){
                document.querySelector('.'+cars.art).classList.remove("active_prod")   
            }
            if(search_m == ''){
                document.querySelector('.'+cars.art).classList.remove("active_prod")   
            }
        }
    });
    const formElement = document.getElementById('form_filter');
    
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form_filter); // создаём объект FormData, передаём в него элемент формы
  // теперь можно извлечь данные
  const first_date = formData.get('check_in_date'); 
  const last_date = formData.get('check_out_date');
  const min_price = formData.get('min_price');
  const max_price = formData.get('max_price');
  const collor = (formData.get('collor')).toLowerCase();
  for(let cars of carr_array){
    if(collor !== '' && collor != cars.collor.toLowerCase()){
        document.querySelector('.'+cars.art).classList.add("active_col")
    }
    else
    if(collor == cars.collor.toLowerCase()){
        document.querySelector('.'+cars.art).classList.remove("active_col")
    }
    if(collor == ''){
        document.querySelector('.'+cars.art).classList.remove("active_col")
    }
    if(min_price !== '' && min_price > cars.price ){
        document.querySelector('.'+cars.art).classList.add("active")
    }
    if(min_price !== '' && min_price <= cars.price){
        document.querySelector('.'+cars.art).classList.remove("active")
    }
    if(min_price == ''){
        document.querySelector('.'+cars.art).classList.remove("active")
    }
    if(max_price !== '' && max_price < cars.price){ 
    document.querySelector('.'+cars.art).classList.add("active_max")
    }
    if(max_price !== '' && max_price >= cars.price){ 
        document.querySelector('.'+cars.art).classList.remove("active_max")
        }
        if(max_price == ''){ 
            document.querySelector('.'+cars.art).classList.remove("active_max")
            }

        if(first_date !== '' && first_date > cars.year){ 
            document.querySelector('.'+cars.art).classList.add("active_date")
            }
            if(first_date !== '' && first_date < cars.year){ 
                document.querySelector('.'+cars.art).classList.remove("active_date")
                }
                if(first_date == ''){ 
                    document.querySelector('.'+cars.art).classList.remove("active_date")
                    }

                if(last_date !== '' && last_date < cars.year){ 
                    document.querySelector('.'+cars.art).classList.add("active_datel")
                    }
                    if(last_date !== '' && last_date > cars.year){ 
                        document.querySelector('.'+cars.art).classList.remove("active_datel")
                        }
                        if(last_date == ''){ 
                            document.querySelector('.'+cars.art).classList.remove("active_datel")
                            }
}
    

});
//window.onload = function(){
    
//const add_basket = (event) => {
  //  const s = event.target;
    //if(basket_car[s.getAttribute('data-art')]!=undefined){
      //  basket_car[s.getAttribute('data-art')]++;
        
    //}
   //else{
    //basket_car[s.getAttribute('data-art')] = 1;
    
    //}
    //localStorage.setItem(addcars,JSON.stringify(basket_car));
//}
  // document.querySelectorAll(".drive").forEach(button => {
    //    button.addEventListener('click', add_basket)
    //}) 

//
//}

function addToCart(){
    let articul = $(this).attr('data-art');
    if(basket_car[articul]!=undefined){
        basket_car[articul]++;
    }
    else{
        basket_car[articul]=1;
        
    }
    localStorage.setItem('cart',JSON.stringify(basket_car));
    showCart();
}

function checkCart(){
    if(localStorage.getItem('cart')!=null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function showCart(){
let out = '';
for(let cars in cart){
    out+= cars + '------'+cart[cars]+'<br>'
}
$('#minicart').html(out);
}
