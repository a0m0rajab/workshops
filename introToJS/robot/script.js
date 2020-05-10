$(document).keydown(function(key) {
    switch (key.which) {
    case 37:
        $('.perso').stop().animate({
            left: '-=60'
        });
        break;
    case 38:
        $('.perso').stop().animate({
            top: '-=60'
        });
        break;
    case 39:
        $('.perso').stop().animate({
            left: '+=60'
        }); 
        break;
    case 40:
        $('.perso').stop().animate({
            top: '+=60'
        });
        break;
    }
});

