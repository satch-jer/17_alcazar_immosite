(function ($, Drupal) {

    Drupal.behaviors.slideshow = {
        attach: function (context, settings) {
            $(window).load(function () {
                $('.views-field-field-realestate-img > .field-content').cycle({
                    fx: 'fade',
                    timeout: 5000
                });
            });
        }
    };

})(jQuery, Drupal);