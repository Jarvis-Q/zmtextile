KISSY.add(function (S, _, Slider) {
    var slider = new Slider('J_Slide',{
        autoSlide: true,
        effect: 'fade',
        timeout: 4000,
        speed: 700,
        eventType: 'click',
        triggerDelay: 200,
        selectedClass: 'current',
        hoverStop: false,
        //adaptive_fixed_width:true,
        adaptive_width: function(){
            return S.one(window).width();
            // return S.DOM.width(window);
        }
    });

    var prodSlide = new Slider('J_ProductSlide',{
        eventType:'click',
        navClass:'scrollable-trigger',
        contentClass:'scrollable-pannel',
        pannelClass:'scrollable-content',
        selectedClass:'current',
        triggerSelector:'a',
        carousel: true,
        autoSlide: true,
        effect:'hSlide'
    });

    function addEventListen() {
        S.all('.trigger-bar a').on('click', function() {
            if (S.DOM.hasClass(this, 'trigger-bar-prev')) {
                prodSlide.previous();
            } else {
                prodSlide.next();
            }
        })
    }

    var initialize = {
        start: function() {
            addEventListen();
        }
    }

    initialize.start();
}, {
    requires: ['core', 'kg/slide/2.0.2/']
})