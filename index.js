$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $("#nav-menu").addClass("sticky");
    } else {
      $("#nav-menu").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $("#nav-menu .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $("#nav-menu .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Back-End Developer", "Full Stack Devloper"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Back-End Developer", "Full Stack Devloper"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

let drive = document
  .querySelector(".Drivegoogle")
  .addEventListener("click", openDrive);

function openDrive() {
  window.open(
    (href =
      "https://drive.google.com/file/d/1SE2qqDdIdkg07ec1m7Oloi_jYZ06-Y5q/view?usp=sharing")
  );
}

let drive2 = document
  .querySelector(".googleDrive")
  .addEventListener("click", openDrive2);

function openDrive2() {
  window.open(
    (href =
      "https://drive.google.com/file/d/1SE2qqDdIdkg07ec1m7Oloi_jYZ06-Y5q/view?usp=sharing")
  );
}




let myform = document.getElementById("contact")
myform.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name111").value;
  let email = document.getElementById("email111").value;
  let number = document.getElementById("number111").value;
  let message = document.getElementById("message111").value;

  let object = {
    name: name,
    email: email,
    number: number,
    message: message
  }
  console.log(object);

  fetch(`https://portfolio-database.onrender.com/post/add`, {
    method: "POST",
    body: JSON.stringify(object),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
})



// function sendmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "chandankumarbehera1425@gmail.com",
//     Password: "password",
//     To: 'them@website.com',
//     From:document.getElementById("email111").value,
//     Subject: "New Contact",
//     Body: "And this is the body"
//   }).then(
//     message => alert(message)
//   );
// }
