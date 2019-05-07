XA.component.header = (function ($) {

    var api = {};

    api.init = function () {
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 1) {
                // Set container to fixed
                $('.static-top-nav').addClass('fixed-header');
                // Change grid settings
                $('.fixed-header .header-container-inner .component.column-splitter .col-xs-3').removeClass('col-xs-3').addClass('col-xs-2');
                $('.fixed-header .header-container-inner .component.column-splitter .col-xs-9').removeClass('col-xs-9').addClass('col-xs-10');
                // Hide mega-nav elements
                $('.fixed-header .primary-nav-container .component.container.megadrop').removeClass('megadrop');
                $('.fixed-header .primary-nav-container .component.navigation.navigation-title').removeClass('megadrop-nav');
                $('.fixed-header .primary-nav-container .component.navigation.navigation-title').addClass('navigation-main navigation-main-horizontal');
            }
            else {
                // Reset all changes
                $('.static-top-nav').removeClass('fixed-header');
                $('.header-container-inner .component.column-splitter .col-xs-2').removeClass('col-xs-2').addClass('col-xs-3');
                $('.header-container-inner .component.column-splitter .col-xs-10').removeClass('col-xs-10').addClass('col-xs-9');
                $('.primary-nav-container .component.container').addClass('megadrop');
                $('.primary-nav-container .component.navigation.navigation-title').addClass('megadrop-nav');
                $('.primary-nav-container .component.navigation.navigation-title').removeClass('navigation-main navigation-main-horizontal');
            }
        });
    };

    return api;
}(jQuery, document));

XA.register("header", XA.component.header);