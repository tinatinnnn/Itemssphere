// desktop
let searchInput = document.querySelector('.header__search--input');
searchInput && searchInput.addEventListener("keyup", function(e){
    if(e.target.value === ''){
        document.querySelector('.header__search__bar').style.display = "none"
    }else{
        document.querySelector('.header__search__bar').style.display = "block"
    }
});

// mobile
let mobileSearchInput = document.querySelector('.m-header__search--input');
mobileSearchInput && mobileSearchInput.addEventListener("keyup", function(e){
    if(e.target.value === ''){
        document.querySelector('.header__search__bar').style.display = "none"
    }
});

// mobile
let mobileSearchBTN = document.querySelector('.header__mobile__btns--search');
mobileSearchBTN && mobileSearchBTN.addEventListener("click", function(e){
    document.querySelector('.header__search__bar').style.display = "block"
});

// mobile
let mobileSearchCancel = document.querySelector('.m-search-cancel');
mobileSearchCancel && mobileSearchCancel.addEventListener("click", function(e){
    document.querySelector('.header__search__bar').style.display = "none"
});

let registerOpen = document.querySelector('.register-open');
registerOpen && registerOpen.addEventListener("click", function(e){
    document.querySelector('.sign-in.login').style.display = "none";
    document.querySelector('.sign-in.register').style.display = "block";
});

let registerToLogin = document.querySelector('.register__link--btn')
registerToLogin && registerToLogin.addEventListener("click", function(e){
    document.querySelector('.sign-in.login').style.display = "block";
    document.querySelector('.sign-in.register').style.display = "none";
});

let registerStepFunc = $('.register__btns--btn');
registerStepFunc && registerStepFunc.on( 'click', function() {
    var thisElement = this;
    $('.register__btns--btn').removeClass('active');
    $(thisElement).addClass('active');
    
    $('.register__step').each(function (id, element) {
        if ($(this).data('step') == $(thisElement).data('step')) {
            if(!$(this).hasClass('active') ){
                $('.register__step').removeClass('active')
                $(this).addClass('active');
            }
        }
    });
})


let ActiveWinodw = document.querySelectorAll(".click-open");
ActiveWinodw && ActiveWinodw.forEach(function(e) {
    let elementClick = e.getAttribute("data-active");
    e.addEventListener("click", function(){
        document.querySelectorAll('.open-active').forEach(function(e){
            let elementActive = e.getAttribute("data-active")
            if(elementActive == elementClick){
                e.classList.toggle('active')
            }
        })
    });
});

let CloseActiveWindow = document.querySelectorAll(".close-click");
CloseActiveWindow && CloseActiveWindow.forEach(function(e) {
    let elementClick = e.getAttribute("data-active");
    e.addEventListener("click", function(){
        document.querySelectorAll('.open-active').forEach(function(e){
            let elementActive = e.getAttribute("data-active")
            if(elementActive == elementClick){
                e.classList.toggle('active')
            }
        })
    });
});


const convertImages = (query, callback) => {
    const images = document.querySelectorAll(query);
  
    images.forEach(image => {
      fetch(image.src)
      .then(res => res.text())
      .then(data => {
        const parser = new DOMParser();
        const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
  
        if (image.id) svg.id = image.id;
        if (image.className) svg.classList = image.classList;
  
        image.parentNode.replaceChild(svg, image);
      })
      .then(callback)
      .catch(error => console.error(error))
    });
}
convertImages('.convert-svg');
$(function(){
    $("a").each(function(){
        $(this).attr("rel","external");
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    var let = document.querySelector('.header').clientHeight;
    document.querySelector('.head-menu--fix').style.top = `${let}px`;
});

$(function() {
    $(".quantity__btn").on("click", function() {

        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
      
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
          } else {
         // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
          } else {
            newVal = 0;
          }
        }
      
        $button.parent().find("input").val(newVal);
      
      });
});