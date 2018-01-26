(function ($, Drupal) {

    Drupal.behaviors.slideshow = {
        attach: function (context, settings) {

            function createSlick(){
                $(".js-slick-single-item").not('.slick-initialized').slick({
                    autoplay: true,
                    dots: true,
                    speed: 1000,
                    prevArrow: false,
                    nextArrow: false,
                    centerMode: true,
                    padding: 25,
                    slidesToShow: 3,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                    ]
                });
            }

            createSlick();

            //Now it will not throw error, even if called multiple times.
            $(window).on( 'load', createSlick );
        }
    };
})(jQuery, Drupal);

