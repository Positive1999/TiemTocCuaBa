window.addEventListener("scroll", function () {
    var arrowTop = document.getElementById("arrow-top");
    if (window.pageYOffset > 380) {
        arrowTop.style.display = "block";
    } else {
        arrowTop.style.display = "none";
    }
  });
  
  document.getElementById("arrow-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
