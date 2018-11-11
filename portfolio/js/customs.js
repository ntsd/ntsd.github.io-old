
(function() {
    const animationInList = ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp']

    $.fn.waypointsSetup = {
        'animationClass': '.has-animation'
    }
    $.fn.waypointsInit = function() {
        var offsetPos = $(this).attr('trigger-offset') || '50vh';

        $(this).waypoint({
            handler: function(direction) {
                $(this.element).find($.fn.waypointsSetup.animationClass).each(function() {
                    // console.log(offsetPos + ' hit');
                    var el = $(this)
                    var animation = el.attr('data-animation')
                    if (animation == "random-animate" | animation == "" | animation == null) {
                        animation = animationInList[Math.floor(Math.random()*animationInList.length)]
                    }
                    var delay = 0
                    if (el.attr('data-delay')) {
                        delay = el.attr('data-delay')
                    }
                    if (direction == 'down') {
                        setTimeout(function() {
                            el.addClass('animated ' + animation)
                        }, delay)
                    }
                    // else {
                    //     setTimeout(function() {
                    //         el.removeClass('animated ' + animation)
                    //     }, delay)
                    // }
                    
                })
            }
        }, {
            offset: offsetPos
        })
    }
}(jQuery));

$(function() {
    $('.trigger-animation').waypointsInit()
});
 