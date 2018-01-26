(function ($, Drupal) {

    Drupal.behaviors.appartment = {
        attach: function (context, settings) {
            $(window).load(function () {
                //hide all rows
                $('.view-appartementen > .view-content >.views-row').hide();

                //show first row and add active class to filter
                $('.view-appartementen > .view-content > .views-row:nth-child(1)').show().addClass("isActive");
                $('#block-appartementtypea > .field--name-field-linksblock-links > .field__item:nth-child(1)').addClass("active");

                //onclick
                $('.field--name-field-linksblock-links > .field__item').on("click", function(e){
                    e.preventDefault();

                    //remove class active and add active to clicked
                    $('.field--name-field-linksblock-links > .field__item').removeClass("active");
                    $(this).addClass("active");

                    //get index of clicked item
                    var clickedItem = $( ".field__item" ).index( $(this) );

                    //fade out active rows
                    $('.isActive').fadeOut(function(){
                        //fade in clicked row
                        $('.view-appartementen > .view-content > .views-row').removeClass("isActive");

                        switch(clickedItem){
                            case 8:
                                $('.view-appartementen > .view-content > .views-row:nth-child(1)').addClass("isActive").fadeIn()
                                break;
                            case 9:
                                $('.view-appartementen > .view-content > .views-row:nth-child(2)').addClass("isActive").fadeIn()
                                break;
                            case 10:
                                $('.view-appartementen > .view-content > .views-row:nth-child(3)').addClass("isActive").fadeIn()
                                break;
                            case 11:
                                $('.view-appartementen > .view-content > .views-row:nth-child(4)').addClass("isActive").fadeIn()
                                break;
                            case 12:
                                $('.view-appartementen > .view-content > .views-row:nth-child(5)').addClass("isActive").fadeIn()
                                break;
                            case 13:
                                $('.view-appartementen > .view-content > .views-row:nth-child(6)').addClass("isActive").fadeIn()
                                break;
                            case 14:
                                $('.view-appartementen > .view-content > .views-row:nth-child(7)').addClass("isActive").fadeIn()
                                break;
                            case 15:
                                $('.view-appartementen > .view-content > .views-row:nth-child(8)').addClass("isActive").fadeIn()
                                break;
                        }
                    });
                })
            });
        }
    };

})(jQuery, Drupal);