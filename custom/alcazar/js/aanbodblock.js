(function ($, Drupal) {

    Drupal.behaviors.aanbodblock = {
        attach: function (context, settings) {
            $(window).load(function () {
                $(window).resize(function () {
                    $('.aanbodblock_right').height($('.aanbodblock_left').height());
                }).trigger('resize');
            });
        }
    };

})(jQuery, Drupal);