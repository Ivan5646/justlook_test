$(document).ready(function(){$(".header ul li").on("click",function(){$(".header ul li").each(function(e,a){var t=$(a);"active"==t.attr("class")&&t.removeClass("active")}),$(this).is(":last-child")||$(this).is(":first-child")||$(this).toggleClass("active")});var e=$(".header ul");$(".header .header__hamburger").click(function(){$(this).toggleClass("header__hamburger_open"),e.addClass("header__transition").toggleClass("header__menuShow"),setTimeout(function(){e.removeClass("header__transition")},3e3)}),$(document).click(function(a){$(a.target).closest(".header").length||e.hasClass("header__menuShow")&&(e.addClass("header__transition").toggleClass("header__menuShow"),setTimeout(function(){e.removeClass("header__transition")},3e3))})});