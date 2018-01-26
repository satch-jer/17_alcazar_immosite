(function ($, Drupal) {

    Drupal.behaviors.house = {
        attach: function (context, settings) {
            $(window).load(function () {

                //hide all rows
                $('.view-huizen > .view-content >.views-row').hide();

                //show first row and add active class to filter
                $('.view-huizen > .view-content > .views-row:nth-child(1)').show().addClass("isActive");
                $('#block-huistypea > .field--name-field-linksblock-links > .field__item:nth-child(1)').addClass("active");

                //onclick
                $('.field--name-field-linksblock-links > .field__item').on("click", function(e){
                    e.preventDefault();

                    //remove class active and add active to clicked
                    $('.field--name-field-linksblock-links > .field__item').removeClass("active");
                    $(this).addClass("active");

                    //get index of clicked item
                    var clickedItem = $( ".field__item" ).index( $(this) );

                    console.log(clickedItem);

                    //fade out all rows
                    $('.isActive').fadeOut(function(){
                        //fade in clicked row
                        $('.view-huizen > .view-content > .views-row').removeClass("isActive");

                        //fade in clicked row
                        switch(clickedItem){
                            case 8:
                                $('.view-huizen > .view-content > .views-row:nth-child(1)').addClass("isActive").fadeIn()
                                break;
                            case 9:
                                $('.view-huizen > .view-content > .views-row:nth-child(2)').addClass("isActive").fadeIn()
                                break;
                            case 10:
                                $('.view-huizen > .view-content > .views-row:nth-child(3)').addClass("isActive").fadeIn()
                                break;
                            case 11:
                                $('.view-huizen > .view-content > .views-row:nth-child(4)').addClass("isActive").fadeIn()
                                break;
                            case 12:
                                $('.view-huizen > .view-content > .views-row:nth-child(5)').addClass("isActive").fadeIn()
                                break;
                            case 13:
                                $('.view-huizen > .view-content > .views-row:nth-child(6)').addClass("isActive").fadeIn()
                                break;
                            case 14:
                                $('.view-huizen > .view-content > .views-row:nth-child(7)').addClass("isActive").fadeIn()
                                break;
                            case 15:
                                $('.view-huizen > .view-content > .views-row:nth-child(8)').addClass("isActive").fadeIn()
                                break;
                            case 16:
                                $('.view-huizen > .view-content > .views-row:nth-child(9)').addClass("isActive").fadeIn()
                                break;
                        }
                    });
                })
            });
        }
    };

})(jQuery, Drupal);