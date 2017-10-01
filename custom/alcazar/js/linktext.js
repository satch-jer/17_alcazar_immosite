(function ($, Drupal) {

    Drupal.behaviors.linktext = {
        attach: function (context, settings) {
            $(window).load(function () {
                $('.file--application-pdf > a').text('download plan');
            });
        }
    };

})(jQuery, Drupal);