$(document).ready(function(){$(".header ul li").on("click",function(){$(".header ul li").each(function(e,i){var s=$(i);"active"==s.attr("class")&&s.removeClass("active")}),$(this).is(":last-child")||$(this).is(":first-child")||$(this).toggleClass("active")});var e=$(".header .header__ul-wrapper");$(".header .header__hamburger").click(function(i){e.hasClass("header__showMenu")?e.slideUp(300,function(){e.removeClass("header__showMenu")}):e.addClass("header__showMenu").slideUp(1).slideDown(300)}),$(document).click(function(i){$(i.target).closest(".header").length||e.is(":visible")&&(e.slideUp(300),setTimeout(function(){e.removeClass("header__showMenu")},300))}),$(window).width()<768&&$(".header > div:first-child").removeClass("container"),$(window).resize(function(){$(window).width()<768?$(".header > div:first-child").removeClass("container"):$(window).width()>768&&$(".header > div:first-child").addClass("container")})});