$(document).ready(function(){$(".header ul li").on("click",function(){$(".header ul li").each(function(e,i){var a=$(i);"active"==a.attr("class")&&a.removeClass("active")}),$(this).is(":last-child")||$(this).is(":first-child")||$(this).toggleClass("active")});var e=$(".header .header__ul-wrapper");$(".header .header__hamburger").click(function(i){e.hasClass("header__showMenu")?e.slideUp(300,function(){e.removeClass("header__showMenu")}):e.hide().slideDown(300,function(){e.addClass("header__showMenu")})}),$(document).click(function(i){$(i.target).closest(".header").length||e.is(":visible")&&e.toggleClass("header__showMenu")}),$(window).width()<768&&$(".header > div:first-child").removeClass("container"),$(window).resize(function(){$(window).width()<768?$(".header > div:first-child").removeClass("container"):$(window).width()>768&&$(".header > div:first-child").addClass("container")})});