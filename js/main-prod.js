$(document).ready(function(){
  
  let body = document.querySelector("body");
    let navbar = document.querySelector(".navbar");
    let menuBtn = document.querySelector(".menu-btn");
    let cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }

  // function a(a) {
  //   return a.host !== window.location.host;
  // }
  // $("a").each(function () {
  //     var a = new RegExp("/" + window.location.host + "/");
  //     a.test(this.href) || $(this).attr("target", "_blank");
  // });

  // $(".spotlight a").each(function () {
  //   a(this) && $(this).addClass("external");
  // })


  $(".spotlight a").each(function () {
      $(this).addClass("external");
  })

  $('.grid__gallery a').simpleLightbox();

    // $('.slider__home').each(function (idx, item){
    //   var carouselId = "carousel" + idx;
    //   this.id = carouselId;
    //   $(this).slick({
    //       autoplay: true,
    //       fade: true,
    //       cssEase: 'linear',
    //       arrows: false
    //   });
      
    // })

    $('.slider__home-residencial').slick({
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        // adaptiveHeight: true,
        arrows: false,
        autoplaySpeed: 1500
    });

    $('.slider__home-comercial').slick({
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        // adaptiveHeight: true,
        arrows: false,
        autoplaySpeed: 3000
    });

    $('.slider__home-cultural').slick({
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        // adaptiveHeight: true,
        arrows: false,
        autoplaySpeed: 4500
    });

    $('.slider__escritorio--equipe').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: 'linear',
        responsive: [
              {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  arrows: false,
                  dots: true
                }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            }
          ]
    });

    var $filters = $(".filter [data-filter]"),
      $boxes = $(".list__projetos [data-category]");
  
    $filters.on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
  
      $filters.removeClass("active");
      $this.addClass("active");
  
      var $filterColor = $this.attr("data-filter");
  
      if ($filterColor == "all") {
        $boxes
          .removeClass("is-animated")
          .fadeOut()
          .promise()
          .done(function () {
            $boxes.addClass("is-animated").fadeIn();
          });
      } else {
        $boxes
          .removeClass("is-animated")
          .fadeOut()
          .promise()
          .done(function () {
            $boxes
              .filter('[data-category = "' + $filterColor + '"]')
              .addClass("is-animated")
              .fadeIn();
          });
      }
    });

});

var imgGallery = document.querySelectorAll('.grid__gallery > div img');

for(let i = 0; i < imgGallery.length; i++){
    let overlayImgGallery = document.createElement('div');
    overlayImgGallery.className = 'hvrbox-layer_top';
    overlayImgGallery.innerHTML = `<div class="hvrbox-text">+</div>`;
    imgGallery[i].parentNode.insertBefore(overlayImgGallery, imgGallery.nextSibling);
}

// let inputNome = document.getElementById('nome');
// let inputEmail = document.getElementById('email');
// let inputMensagem = document.getElementById('mensagem');
// let btnSubmit = document.getElementById('btnSubmit');
// let msgForm = document.querySelector('.form__box .box--submit p');
