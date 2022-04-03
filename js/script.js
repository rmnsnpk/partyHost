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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
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
    $('.blogpop_card_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "200px"
    });

});

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
    document.querySelector(".toDialog").style.left = "100vw";
    return false;
}

$(function() {
    //задание заполнителя с помощью параметра placeholder
    $(".date").mask("99.99.9999", { placeholder: "дд.мм.гггг" });
    //задание заполнителя с помощью параметра placeholder
    $(".phone").mask("+375 (99) 999-99-99", { placeholder: " " });
});

document.querySelector(".blogpop1_card_close").onclick = function close() {
    document.querySelector(".blogpop1").style.left = "100vw";
    return false;
}
document.querySelector(".blog_card1").onclick = function open() {
    document.querySelector(".blogpop1").style.left = "0";
    return false;
}