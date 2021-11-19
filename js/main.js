// if (window.innerWidth < 1024) {
//   var x1 = document.getElementsByClassName("active")[0];
//   var x2 = document.getElementById("homesection");
//   x1.classList.remove("active");
//   x2.classList.remove("active");



// }

let menuItem = document.getElementsByClassName("main-menu")[0];

let contentArea = document.getElementsByClassName("content-area")[0];

let tabsPane = menuItem.getElementsByTagName("li");

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener("click", function () {
    menuItem.getElementsByClassName("active")[0]
    .classList.remove("active");
    tabsPane[i].classList.add("active");


    if (contentArea.getElementsByClassName("active")[0] != null) {
      contentArea.getElementsByClassName("active")[0].classList.remove("active");
    }
    contentArea.getElementsByTagName("section")[i].classList.add("active");

    // if (window.innerWidth < 1024) {
    //   if (document.querySelector(".active") != null) {
    //     var content = document.getElementsByClassName("content-Area")[0];
    //     var header = document.getElementsByClassName("header")[0];
    //     header.style.visibility = "hidden";
    //     content.style.display = "block";
    //     content.style.minWidth = "100%";
    //   }
    // }
  });
}



function openMenu() {
  if (window.innerWidth < 1024) {
    var header = document.getElementById("site_header");
    var togglebar = document.getElementById("menu-toggle");
    header.classList.toggle("mobile-menu-hide");
    togglebar.classList.toggle("open");
  }
}
