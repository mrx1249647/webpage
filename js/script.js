$("#services").animate({width:'100%'} ,2000);
$("#services").animate({height:'100%'} ,2000 , function (){

$("#services h2").fadeIn(2000 , function(){
    $("#services > p").fadeIn(2000 , function (){

        $(".col-md-4").slideDown(2000)
    })
    
});

});