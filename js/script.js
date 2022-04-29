

let humb = document.querySelector('#hamburger__nav');


function toggleHumb() {
    if(humb.classList.contains('active__humb')){
        humb.classList.remove('active__humb')
        humb.style.right = "-1000vh";
    } else {
        humb.classList.add('active__humb');
        humb.style.right = '0';
    }
}

let sliderItemSelected = 2;
let sliderItemSelected2 = 2;
let sliderItemSelected3 = 2;

function left() {
    sliderItemSelected--;
    showSlides(sliderItemSelected);
}

function right() {
    sliderItemSelected++;
    showSlides(sliderItemSelected);
}

function left2() {
    sliderItemSelected2--;
    showSlides2(sliderItemSelected2);
}

function right2() {
    sliderItemSelected2++;
    showSlides2(sliderItemSelected2);
}

function left3() {
    sliderItemSelected3--;
    showSlides3(sliderItemSelected3);
}

function right3() {
    sliderItemSelected3++;
    showSlides3(sliderItemSelected3);

}



function currentSlide(n) {
    sliderItemSelected = n;
    console.log(sliderItemSelected);
    showSlides(sliderItemSelected);
}
function currentSlide2(n) {
    sliderItemSelected2 = n;
    console.log(sliderItemSelected2);
    showSlides2(sliderItemSelected2);
}
function currentSlide3(n) {
    sliderItemSelected3 = n;
    console.log(sliderItemSelected3);
    showSlides3(sliderItemSelected3);
}

function showSlides(n = 2) {
    let slides = document.querySelectorAll(".item");
    let dots = document.querySelectorAll(".slider-dots_item");
    if(n < 0){
        n = 3;
    }
    if(n > 3){
        n = 1;
    }
    sliderItemSelected = n;
    slides.forEach(item => item.style.display = "none")
    dots.forEach(item => item.classList.remove('active__slide'))
    slides[n-1].style.display = "block";
    dots[n-1].classList.add("active__slide")
}

// -------------------------2 ---------------------

function showSlides2(n = 2) {
    let slides2 = document.querySelectorAll(".item-2");
    let dots2 = document.querySelectorAll(".slider-dots_item-2");
    if(n < 0){
        n = 3;
    }
    if(n > 3){
        n = 1;
    }
    sliderItemSelected2 = n;
    slides2.forEach(item => item.style.display = "none")
    dots2.forEach(item => item.classList.remove('active__slide'))
    slides2[n-1].style.display = "block";
    dots2[n-1].classList.add("active__slide")
}

// -------------------------3 ---------------------

function showSlides3(n = 2) {
    let slides2 = document.querySelectorAll(".item-3");
    let dots2 = document.querySelectorAll(".slider-dots_item-3");
    if(n < 0){
        n = 3;
    }
    if(n > 3){
        n = 1;
    }
    sliderItemSelected3 = n;
    slides2.forEach(item => item.style.display = "none")
    dots2.forEach(item => item.classList.remove('active__slide'))
    slides2[n-1].style.display = "block";
    dots2[n-1].classList.add("active__slide")
}

//-------------------swipe---------
let item1 = document.querySelectorAll('.slider');
// let item2 = document.querySelectorAll(`.item-2`);
// let item3 = document.querySelectorAll(`.item-3`);



// Вешаем на прикосновение функцию handleTouchStart
function swipe(params, funcLeft, funcRight) {
    params.addEventListener('touchstart', handleTouchStart, false);    
    params.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;                                                        
    var yDown = null;                                                                                                                                                                        

    function handleTouchStart(evt) {                                         
        xDown = evt.touches[0].clientX;                                      
        yDown = evt.touches[0].clientY;                                      
    };                                              

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }
    
        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;
    
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
        // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                funcRight(); 
 
            } else {
                funcLeft(); 

            }                       
        } else { // Это вам, в общем-то, не надо, вы ведь только влево-вправо собираетесь двигать
            if ( yDiff > 0 ) {
                
            } else { 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };
}

swipe(item1[0], left, right);
swipe(item1[1], left2, right2);
swipe(item1[2], left3, right3);





// --------choiceSlider


function currentSlideChoice(n) {
    showSlidesChoice(n);
}


function showSlidesChoice(n = 2) {
    let slides = document.querySelectorAll(".item-choice");
    let dots = document.querySelectorAll(".slider-dots_item-choice");
    slides.forEach(item => item.style.display = "none")
    dots.forEach(item => item.classList.remove('active__slide'))
    slides[n-1].style.display = "block";
    dots[n-1].classList.add("active__slide")
}
showSlides();
showSlides2();
showSlides3();
showSlidesChoice();



let slideIndex = 0;
reviewSlider()


function nextSlide() {
    slideIndex ++;
    reviewSlider();
}
function prevSlide() {
    slideIndex --;
    reviewSlider();
}


function reviewSlider(){
    let slides = document.querySelectorAll(".item-review");
    if(slideIndex > slides.length-1){
        slideIndex = 0
    }
    if(slideIndex < 0){
        slideIndex = slides.length-1;
    }
    slides.forEach(item => item.style.display = "none")
    slides[slideIndex].style.display = "block";
    

}

let block = document.querySelectorAll(".choice_block");

block.forEach((block) => {
    function resizer1() {
        this.classList.add("choice_block_card_big");
        block.children[1].classList.remove("choice_block_card_big")
    }

    function resizer2() {
        this.classList.remove("choice_block_card_big");
        block.children[1].classList.add("choice_block_card_big")
    }
    block.children[0].addEventListener("mouseover", resizer1);
    block.children[2].addEventListener("mouseover", resizer1);
    block.children[0].addEventListener("mouseleave", resizer2);
    block.children[2].addEventListener("mouseleave", resizer2);
})


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        hamburger = document.querySelector('.menu_hamburger'),
        menuItem = document.querySelectorAll('.menu_list_item');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('menu_hamburger_active');
        menu.classList.toggle('menu_active');
    });
    document.querySelector('.menu_connect').addEventListener('click', () => {
        hamburger.classList.toggle('menu_hamburger_active');
        menu.classList.toggle('menu_active');
    })
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('menu_hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})





let wedding = document.querySelector(".choice_wedding");
let corp = document.querySelector(".choice_corp");
let bth = document.querySelector(".choice_bth");

corp.remove();
bth.remove();

function choose1() {
    wedding.remove();
    corp.remove();
    bth.remove();
    document.querySelector(".justPoint").append(wedding);
    document.querySelector(".choice_switcher_wedding").style.backgroundColor = "#DB3130";
    document.querySelector(".choice_switcher_corp").style.backgroundColor = "rgba(0,0,0,0)";
    document.querySelector(".choice_switcher_bth").style.backgroundColor = "rgba(0,0,0,0)";
}

function choose2() {
    wedding.remove();
    corp.remove();
    bth.remove();
    document.querySelector(".justPoint").append(corp);
    document.querySelector(".choice_switcher_corp").style.backgroundColor = "#DB3130";
    document.querySelector(".choice_switcher_wedding").style.backgroundColor = "rgba(0,0,0,0)";
    document.querySelector(".choice_switcher_bth").style.backgroundColor = "rgba(0,0,0,0)";
}

function choose3() {
    wedding.remove();
    corp.remove();
    bth.remove();
    document.querySelector(".justPoint").append(bth);
    document.querySelector(".choice_switcher_bth").style.backgroundColor = "#DB3130";
    document.querySelector(".choice_switcher_corp").style.backgroundColor = "rgba(0,0,0,0)";
    document.querySelector(".choice_switcher_wedding").style.backgroundColor = "rgba(0,0,0,0)";
}

function goToWedding() {
    document.querySelector(".choice").scrollIntoView(true);
    choose1();

}

function goToCorp() {
    document.querySelector(".choice").scrollIntoView(true);
    choose2();
}

function goToBth() {
    document.querySelector(".choice").scrollIntoView(true);
    choose3();
}

$("body").on('click', '[href*="#"]', function(e) {
    var fixed_offset = 20;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});
$(window).on("scroll", function() {
    $(".menu").toggleClass("active", $(this).scrollTop() > 10);
    $(".menu_list_item_first").toggleClass("first", $(this).scrollTop() > 10);
    $(".menu_list_item_last").toggleClass("last", $(this).scrollTop() > 10);
    // document.querySelector(".menu_list_item_last").style.marginLeft = "0px";
});
document.querySelectorAll(".open").forEach((elem) => {
    elem.onclick = function open() {
        document.querySelector(".toDialog").style.left = "0";
        return false;
    }
})
document.querySelector(".toDialog_card_close").onclick = function close() {
    document.querySelector(".toDialog").style.left = "1000vw";
    return false;
}

$(function() {
    //задание заполнителя с помощью параметра placeholder
    $(".date").mask("99.99.9999", { placeholder: "дд.мм.гггг" });
    //задание заполнителя с помощью параметра placeholder
    $(".phone").mask("+375 (99) 999-99-99", { placeholder: " " });
});



let cards = document.querySelectorAll(".types_card");

cards.forEach((card, index) => {
    function resizerCard1() {
        card.children[0].classList.add("types_card_2_img");
        card.children[2].classList.add("types_card_button");
        card.children[2].innerHTML = "Подробнее";
    }

    function resizerCard2() {
        let arr = ["Свадьбы", "Дни Рождения", "Выпускные", "Корпоративы"]
        card.children[0].classList.remove("types_card_2_img");
        card.children[2].classList.remove("types_card_button");
        card.children[2].innerHTML = arr[index];
    }
    card.addEventListener("mouseover", resizerCard1);
    card.addEventListener("mouseleave", resizerCard2);
})

$(document).mouseup(function(e) {
    var container = $(".blogpop1_card");
    if (container.has(e.target).length === 0) {
        document.querySelector(".blogpop1").style.left = "1000vw";
        return false;
    }
});
$(document).mouseup(function(e) {
    var container = $(".blogpop2_card");
    if (container.has(e.target).length === 0) {
        document.querySelector(".blogpop2").style.left = "1000vw";
        return false;
    }
});
$(document).mouseup(function(e) {
    var container = $(".blogpop3_card");
    if (container.has(e.target).length === 0) {
        document.querySelector(".blogpop3").style.left = "1000vw";
        return false;
    }
});
$(document).mouseup(function(e) {
    var container = $(".blogpop4_card");
    if (container.has(e.target).length === 0) {
        document.querySelector(".blogpop4").style.left = "1000vw";
        return false;
    }
});
$(document).mouseup(function(e) {
    var container = $(".blogpop5_card");
    if (container.has(e.target).length === 0) {
        document.querySelector(".blogpop5").style.left = "1000vw";
        return false;
    }
});
$(document).mouseup(function(e) {
    var container = $(".toDialog_item");
    if (container.has(e.target).length === 0) {
        document.querySelector(".toDialog").style.left = "1000vw";
        return false;
    }
});

document.querySelector(".blogpop1_card_close").onclick = function close() {
    document.querySelector(".blogpop1").style.left = "1000vw";
    return false;
}
document.querySelector(".blogpop2_card_close").onclick = function close() {
    document.querySelector(".blogpop2").style.left = "1000vw";
    return false;
}
document.querySelector(".blogpop3_card_close").onclick = function close() {
    document.querySelector(".blogpop3").style.left = "1000vw";
    return false;
}
document.querySelector(".blogpop4_card_close").onclick = function close() {
    document.querySelector(".blogpop4").style.left = "1000vw";
    return false;
}
document.querySelector(".blogpop5_card_close").onclick = function close() {
    document.querySelector(".blogpop5").style.left = "1000vw";
    return false;
}
document.querySelector(".blog_card1").onclick = function open() {
    document.querySelector(".blogpop1").style.left = "0";
    return false;
}
document.querySelector(".blog_card2").onclick = function open() {
    document.querySelector(".blogpop2").style.left = "0";
    return false;
}
document.querySelector(".blog_card3").onclick = function open() {
    document.querySelector(".blogpop3").style.left = "0";
    return false;
}
document.querySelector(".blog_card4").onclick = function open() {
    document.querySelector(".blogpop4").style.left = "0";
    return false;
}
document.querySelector(".blog_card5").onclick = function open() {
    document.querySelector(".blogpop5").style.left = "0";
    return false;
}
$(document).ready(function() {
    $('.choice_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: document.getElementsByClassName('choice_prev'),
        nextArrow: document.getElementsByClassName('choice_next'),
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
        ]
    });

    $('.blogpop1_card_slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        dots: true,
        centerPadding: "200px",
        prevArrow: document.getElementsByClassName('blogpop1_card_prev'),
        nextArrow: document.getElementsByClassName('blogpop1_card_next'),
    });
    $('.blogpop2_card_slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        dots: true,
        centerPadding: "200px",
        prevArrow: document.getElementsByClassName('blogpop2_card_prev'),
        nextArrow: document.getElementsByClassName('blogpop2_card_next'),
    });
    $('.blogpop3_card_slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        dots: true,
        centerPadding: "200px",
        prevArrow: document.getElementsByClassName('blogpop3_card_prev'),
        nextArrow: document.getElementsByClassName('blogpop3_card_next'),
    });
    $('.blogpop4_card_slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        dots: true,
        centerPadding: "200px",
        prevArrow: document.getElementsByClassName('blogpop4_card_prev'),
        nextArrow: document.getElementsByClassName('blogpop4_card_next'),
    });
    $('.blogpop5_card_slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "200px",
        dots: true,
        prevArrow: document.getElementsByClassName('blogpop5_card_prev'),
        nextArrow: document.getElementsByClassName('blogpop5_card_next'),
    });
    $('.choice_wedding').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst: true,
        dots: true,
        dotsClass: 'my-dots',
        responsive: [{
            breakpoint: 767,
            settings: 'unslick'
        }]
    });
    $('.choice_bth').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst: true,
        dots: true,
        dotsClass: 'my-dots',
        responsive: [{
            breakpoint: 767,
            settings: 'unslick'
        }]
    });
    $('.choice_corp').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst: true,
        dots: true,
        dotsClass: 'my-dots',
        responsive: [{
            breakpoint: 767,
            settings: 'unslick'
        }]
    });
});


// -------------------------1 ---------------------
