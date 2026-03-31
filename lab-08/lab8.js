window.addEventListener("load", function() {
    var thumbs = document.getElementById("thumbnails");

    // Event delegation untuk klik
    thumbs.addEventListener("click", function (e) {
        if (e.target.nodeName.toLowerCase() == 'img') {
            var featuredImage = document.querySelector("#featured img");
            featuredImage.src = e.target.src;
            featuredImage.title = e.target.title;
        }
    });

    var featured = document.getElementById("featured");

    // Efek Fade In Kapsyen [cite: 43, 44]
    featured.addEventListener("mouseover", function () {
        var caption = document.querySelector("#featured figcaption");
        caption.style.transition = "opacity 1.5s";
        caption.style.opacity = 0.80;
        caption.innerHTML = document.querySelector("#featured img").title;
    });

    // Efek Fade Out Kapsyen [cite: 49, 50]
    featured.addEventListener("mouseout", function () {
        var caption = document.querySelector("#featured figcaption");
        caption.style.transition = "opacity 1.5s";
        caption.style.opacity = 0;
    });
});