
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 50) {
        $(".progress-bar").addClass("progress");
    }
    if (scroll <= 50) {
        $(".progress-bar").removeClass("progress");
    }
}); 

$(document).on("scroll", function(){
    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = 100 * pixels / pageHeight;
    
    $(".progress").css("width", progress + "%");
  })

  
// ---- Notes ---- //

// pixels = amount of px from top of page
// pageHeight = whole page height minus viewable page height
// progress = pixels from top / page-height * 100