$(document).ready(function(){

  // make menu li active
  $(".header ul li").on("click", function(){
    // first remove .active. Modify for multiple classes
    var items = $(".header ul li");
    items.each(function(index, li) {
      var item = $(li); 
      //console.log(item.attr("class"));
      if (item.attr("class") == "active") {
        item.removeClass("active");
      }
    });
    // set .active to the clicked li
    if ( $(this).is(":last-child") || $(this).is(":first-child") ) {
      return
    } else {
      $(this).toggleClass("active");
      // console.log(this.innerText);
    }
  })

  // toogle mobile menu
  var headerUl = $(".header ul");
  
  $(".header .header__hamburger").click(function(){
    $(this).toggleClass("header__hamburger_open");
    headerUl.addClass("header__transition").toggleClass("header__menuShow");
    setTimeout(function(){ headerUl.removeClass("header__transition"); }, 3000);
  });
  
  // hide the menu if clicked outside
  $(document).click(function(event) {
    if(!$(event.target).closest(".header").length) {
      if ( $(".header .header__hamburger").hasClass("header__hamburger_open") ) {
        $(".header .header__hamburger").toggleClass("header__hamburger_open");
      }
      if( headerUl.hasClass("header__menuShow") ) {
        headerUl.addClass("header__transition").toggleClass("header__menuShow");
        setTimeout(function(){ headerUl.removeClass("header__transition"); }, 3000);
      }
    }
  });

});