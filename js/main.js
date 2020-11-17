$(document).ready(function () {
    let e = document.querySelector("body"),
        s = document.querySelector(".navbar"),
        a = document.querySelector(".menu-btn"),
        l = document.querySelector(".cancel-btn");
    (a.onclick = () => {
        s.classList.add("show"), a.classList.add("hide"), e.classList.add("disabled");
    }),
        (l.onclick = () => {
            e.classList.remove("disabled"), s.classList.remove("show"), a.classList.remove("hide");
        }),
        $(".spotlight a").each(function () {
            $(this).addClass("external");
        }),
        $(".grid__gallery a").simpleLightbox(),
        $(".slider__home-residencial").slick({ autoplay: !0, fade: !0, cssEase: "linear", arrows: !1, autoplaySpeed: 1500 }),
        $(".slider__home-comercial").slick({ autoplay: !0, fade: !0, cssEase: "linear", arrows: !1, autoplaySpeed: 3e3 }),
        $(".slider__home-cultural").slick({ autoplay: !0, fade: !0, cssEase: "linear", arrows: !1, autoplaySpeed: 4500 }),
        $(".slider__escritorio--equipe").slick({
            infinite: !0,
            slidesToShow: 5,
            slidesToScroll: 1,
            cssEase: "linear",
            responsive: [
                { breakpoint: 1100, settings: { slidesToShow: 3, slidesToScroll: 1, arrows: !1, dots: !0 } },
                { breakpoint: 900, settings: { slidesToShow: 3, slidesToScroll: 3, arrows: !1, dots: !0 } },
                { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 2, arrows: !1, dots: !0 } },
                { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: !1, dots: !0 } },
            ],
        });
    var t = $(".filter [data-filter]"),
        o = $(".list__projetos [data-category]");
    t.on("click", function (e) {
        e.preventDefault();
        var s = $(this);
        t.removeClass("active"), s.addClass("active");
        var a = s.attr("data-filter");
        "all" == a
            ? o
                  .removeClass("is-animated")
                  .fadeOut()
                  .promise()
                  .done(function () {
                      o.addClass("is-animated").fadeIn();
                  })
            : o
                  .removeClass("is-animated")
                  .fadeOut()
                  .promise()
                  .done(function () {
                      o.filter('[data-category = "' + a + '"]')
                          .addClass("is-animated")
                          .fadeIn();
                  });
    }),
        $(".search-icon").click(function () {
            $(".nav__projetos input[type=search]").toggle(200).focus(), $(".nav__projetos button[type=reset]").toggle(200);
        });
});
var imgGallery = document.querySelectorAll(".grid__gallery > div img");
for (let e = 0; e < imgGallery.length; e++) {
    let s = document.createElement("div");
    (s.className = "hvrbox-layer_top"), (s.innerHTML = '<div class="hvrbox-text">+</div>'), imgGallery[e].parentNode.insertBefore(s, imgGallery.nextSibling);
}
