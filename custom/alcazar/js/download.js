(function ($, Drupal) {

    Drupal.behaviors.download = {
        attach: function (context, settings) {
            $(document).ready(function(){
                $('.file--application-pdf > a').attr("target", "_blank");
            });
        }
    };

})(jQuery, Drupal);