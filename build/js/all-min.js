$(document).ready(function(){$(".header ul li").on("click",function(){$(".header ul li").each(function(e,a){var i=$(a);"active"==i.attr("class")&&i.removeClass("active")}),$(this).is(":last-child")||$(this).is(":first-child")||$(this).toggleClass("active")}),$(".header .header__hamburger").on("click",function(e){$(".header .header__ul-wrapper").toggleClass("header__showMenu")})});