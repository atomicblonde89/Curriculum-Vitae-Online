$(document).ready(function(){

    $("about").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){
    window.location.hash = hash;
    
});
}
});
});
    
$(document).ready(function(){
       
    $("#experience").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
        }
        });
        });

$(document).ready(function(){

            $("#contact").on('click', function(event) {
            if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
            });
            }
            });
            });

$(document).ready(function(){

         $("#education").on('click', function(event) {
         if (this.hash !== "") {
         event.preventDefault();
         var hash = this.hash;
         $('html, body').animate({
         scrollTop: $(hash).offset().top
         }, 800, function(){
         window.location.hash = hash;
           });
           }
           });
           });
