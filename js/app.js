var MainImg = document.getElementById("MainImage");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};

smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
};

smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
};

smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
};

//  active class menu

// var navbar = document.querySelector(".menu").querySelectorAll("a");

// console.log(navbar);

// navbar.forEach((element) => {
//   element.addEventListener("click", function () {
//     navbar.forEach((nav) => nav.classList.remove("active"));
//   });
//   this.classList.add("active");
// });

// const currentLocation = location.href;
// const menuItem = document.querySelectorAll("a");
// const menuLength = menuItem.length;

// for (let i = 0; i < menuLength; i++) {
//   if (menuItem[i].href === currentLocation) {
//     menuItem[i].className = "active";
//   }
// }
