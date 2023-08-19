$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
  console.info("masuk");
});
