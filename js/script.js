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
      var randomNumber = Math.floor((Math.random() * colorArray.length) + 0);
      // console.log(colorArray[2]);
      $(this).css("color",colorArray[randomNumber]);
    }
  );


});


// $('#nav-about').click(function () {
//   $('#about').css("display","block");
// });

$('a.nav-title').click(function () {
  // body...
  var value = $(this).attr('menu-id');
  console.log(value);
  var colorArray = new Array("#3F51B5","#272727","#1752A9","#222D14");
  var randomNumber = Math.floor((Math.random() * colorArray.length) + 0);
  $('.visible').css("visibility","visible");
  $(".content").css("background","#FAFBFC");
  $('.section').hide();
  $('.main-title h1').text(value);
  $('#'+$(this).attr('menu-id')).fadeIn();
});
