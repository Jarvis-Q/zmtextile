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


}, {
    requires: ['core', 'kg/slide/2.0.2/']
})