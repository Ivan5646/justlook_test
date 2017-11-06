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
  $(".header .header__hamburger").on("click", function(event){
    $(".header .header__ul-wrapper").toggleClass("header__showMenu");
  });
  // var header = document.getElementsByClassName("header");
  $("body").on("click", function(event){
    if( $(event.target).is($(".header")) ){
      var myTarget = JSON.stringify($(event.target));
      console.log("oustide the menu "+ myTarget);
    }
  });
  // hide the menu if clicked outside
  $(document).click(function(event) { 
    if(!$(event.target).closest(".header").length) {
      if($(".header").is(":visible")) {
        $(".header .header__ul-wrapper").toggleClass("header__showMenu");
      }
    }        
  });

});