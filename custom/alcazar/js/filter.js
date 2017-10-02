(function ($, Drupal) {

    Drupal.behaviors.filter = {
        attach: function (context, settings) {
            $(window).load(function () {

                //hide all rows
                $('.view-appartementen > .view-content >.views-row').hide();

                //show first row and add active class to filter
                $('.view-appartementen > .view-content > .views-row:nth-child(1)').show()
                $('.field--name-field-linksblock-links > .field__item:nth-child(1)').addClass("active");

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
                    $('.view-appartementen > .view-content >.views-row').fadeOut(function(){

                    });

                    //fade in clicked row
                    switch(clickedItem){
                        case 8:
                            $('.view-appartementen > .view-content > .views-row:nth-child(1)').fadeIn()
                            break;
                        case 9:
                            $('.view-appartementen > .view-content > .views-row:nth-child(2)').fadeIn()
                            break;
                        case 10:
                            $('.view-appartementen > .view-content > .views-row:nth-child(3)').fadeIn()
                            break;
                        case 11:
                            $('.view-appartementen > .view-content > .views-row:nth-child(4)').fadeIn()
                            break;
                    }
                })
            });
        }
    };

})(jQuery, Drupal);