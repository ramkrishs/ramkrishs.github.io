window.onload = function() {
  var sidebar = document.getElementById("sidebar");
  var sidebarButton = document.getElementById("sidebar-button");

  function openSidebar(e) {
    if (sidebar.className.indexOf("slideIn") != -1) {
      sidebar.className = sidebar.className.replace(" slideIn", "");
    } else {
     sidebar.className = sidebar.className + " slideIn";
    }
  }

  sidebarButton.addEventListener("click", openSidebar, false);
};

$(document).ready(function(){
  $(".nav-title").hover(function () {

      var colorArray = new Array("#2980b9","#e67e22","#8e44ad","#16a085","#2ecc71","#c0392b");
      var randomNumber = Math.floor((Math.random() * 6) + 0);
      console.log(colorArray[2]);
      $(this).css("color",colorArray[randomNumber]);
    }
  );


});
