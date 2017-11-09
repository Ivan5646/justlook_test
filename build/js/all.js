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
  var ulWrapper = $(".header .header__ul-wrapper");

  // 1
  // $(".header .header__hamburger").on("click", function(event){
  //   ulWrapper.toggleClass("header__showMenu");
  // });

  // 2
  // $(".header .header__hamburger").click(function(event) {
  //   if(ulWrapper.hasClass("header__showMenu")) {
  //     ulWrapper.slideUp(300, function() { 
  //       ulWrapper.removeClass("header__showMenu");
  //     });
  //     } else {
  //       ulWrapper.addClass("header__showMenu").slideUp(1).slideDown(300);
  //     }
  //   });

  // 3. animation
  // $(".header .header__hamburger").click(function(){
  //   ulWrapper.animate({opacity: "1"});
  // });

  // 4. transition, add class
  $(".header .header__hamburger").click(function(){
    $(".header ul").toggleClass("header__menuShow");
  });


  
  // hide the menu if clicked outside
  // $(document).click(function(event) { 
  //   if(!$(event.target).closest(".header").length) {
  //     if(ulWrapper.is(":visible")) {
  //       ulWrapper.slideUp(300);
  //       setTimeout(function(){ ulWrapper.removeClass("header__showMenu"); }, 300);
  //       // ulWrapper.removeClass("header__showMenu");
  //     }
  //   }        
  // });

  // remove .header .container on moible
  if( $(window).width() < 768 ){
    $(".header > div:first-child").removeClass("container");
  }

  $(window).resize(function() {
    if( $(window).width() < 768 ){
      $(".header > div:first-child").removeClass("container");
    } else if ($(window).width() > 768 ) {
      $(".header > div:first-child").addClass("container");
    }
  });


});