$(function() {
    $('.burger').click(function() {

        $(".fixed").css({
            "top": "40px"
        });


    })
    $('.close-searcher').click(function() {
        $(".fixed").css({
            "top": ""
        });

        $("#search").val("");
        $(".no-found").remove();
        $('#search-result').html("");
    })

});