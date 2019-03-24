$(document).ready(function(){
    $("body").on('click','.image-radio',function(){
        if($(this).find('input[type="radio"]').first().attr("checked")){
            $(this).addClass('image-radio-checked');
        }else{
            $(this).removeClass('image-radio-checked');
        }
    });

    // sync the input state
    $("body").on("click",'.image-radio', function(e){
        $(".image-radio").removeClass('image-radio-checked');
        $(this).addClass('image-radio-checked');
        var $radio = $(this).find('input[type="radio"]');
        $radio.attr("checked",!false);
        e.preventDefault();
    });
    
});