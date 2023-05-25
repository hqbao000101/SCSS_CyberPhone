// todo: header navbar
var header_navbar = document.querySelectorAll("header .header_nav ul li");

for (var i = 0; i < header_navbar.length; i++) {
  header_navbar[i].addEventListener("click", function () {
    document
      .querySelector("header .header_nav ul li.active")
      .classList.remove("active");
    this.classList.add("active");
  });
}

// todo: animation
document.getElementById("product_scroll").onclick = function () {
  var product_arr = document.querySelectorAll(
    "section.product .product_content .product_item"
  );
  for (var i = 0; i < product_arr.length; i++) {
    product_arr[i].classList.add("animation_active");
  }
};

// todo: scroll - events
document.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    var product_arr = document.querySelectorAll(
      "section.product .product_content .product_item"
    );
    for (var i = 0; i < product_arr.length; i++) {
      product_arr[i].classList.add("animation_active");
    }
    // todo: active - navbar
  }
});
