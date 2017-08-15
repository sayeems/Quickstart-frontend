/*
Author: Sayeem Mohammad Shahria
Version: 1.0
*/
(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        $(".navbar-toggle").click(function () {
            $("body").addClass("mobil-menu-activted");
        });

        $("ul.nav.navbar-nav li a").click(function () {
            $(".navbar-collapse").removeClass("in");
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	