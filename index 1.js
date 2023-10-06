$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
})

    var runredirect = function () {
        var redirectw1 = window.open('https://drive.google.com/file/d/1SE2qqDdIdkg07ec1m7Oloi_jYZ06-Y5q/view?usp=share_link');
        redirectw1.location;
    }

    ////////////////////////
    var typed = new Typed(".multi-text", {
        strings: ["Full Stack Web Developer", "Full Stack Web Developer", "Node Backend Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

