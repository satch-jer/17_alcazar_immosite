(function ($, Drupal) {

    Drupal.behaviors.landing = {
        attach: function (context, settings) {
            $(window).load(function () {
                $(window).resize(function () {
                    var header_height = $('header').height() + $('.page-nav').height() + 50;
                    var landing_height = ($(window).height() - header_height);

                    $('.alcazar_landing').height(landing_height);
                }).trigger('resize');
            });
        }
    };

})(jQuery, Drupal);