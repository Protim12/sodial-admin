'use strict';
(function($){
    $(document).ready(function () {

        // dropdown
        $(".export-dropdown").hide();
        $(".dropdown-btn").click(function(event) {
            // $(this).find("a").click(function(e) {
            //     e.preventDefault();
            // })
            $(".export-dropdown").not($(this).find(".export-dropdown")).hide();
            $(this).find(".export-dropdown").toggle();

            $(".icon-img").not($(this).find(".icon-img")).removeClass("active");
            $(this).find(".icon-img").toggleClass("active");
            event.stopPropagation();
        });

        $(".export-dropdown").click(function(e){
            e.stopPropagation();
        });

        $(document).click(function() {
            $(".export-dropdown").hide();
            $(".icon-img").removeClass("active");
        });

        $("._1menu_button").click(function() {
            $(".sidebar-left").toggleClass("sidebar-left-expand");
            $(".content-body").toggleClass("content-body-left-expand");
        })

        $(".online-bar-control").click(function() {
            $(".content-body").toggleClass("content-body-right-expand");
            $(this).closest(".sidebar-right").toggleClass("sidebar-right-expand");
        })

        // responsive mobile navbar
        $(".menu-col-btn").click(function(e) {
            $(".menu-col-group").toggleClass("menu-col-show");
            e.stopPropagation();
        })

        $(".menu-col-group").click(function(e) {
            e.stopPropagation();
        })

        $(document).click(function() {
            $(".menu-col-group").removeClass("menu-col-show");
        })

        // resonsive mobile search
        $(".search-col-btn").click(function(e) {
            $("._1menu_search").toggleClass("search-area-show");
            e.stopPropagation();
        })

        $("._1menu_search").click(function(e) {
            e.stopPropagation();
        })

        $(document).click(function() {
            $("._1menu_search").removeClass("search-area-show");
        })
    });
})(jQuery);