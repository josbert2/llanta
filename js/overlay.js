$(function() {
    $('.burger').click(function() {

        $(".fixed_search").css({
            "top": "40px"
        });


    })
    $('.close-searcher').click(function() {
        $(".fixed_search").css({
            "top": ""
        });

        $("#search").val("");
        $(".no-found").remove();
        $('#search-result').html("");
    })

});