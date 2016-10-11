
;(function () {
    angular.module('NorthWestCCC')
        .component('mainComponent', {
            templateUrl: 'components/main-component.html',
            controller: MainController,
        })

    function MainController() {
        var mc = this;

        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
    $('.main2 h3').animateCss('bounceInDown')
     $('.main2 h5').animateCss('bounceInDown')
    $('#scroller').animateCss('flash');
    }
} ())