$(document).ready(function(){
    $(document).on('click', '#submit', function(){
        var fna = $('#fn').val();
        var lna = $('#ln').val();
        var desc = $('#largebox').val();
        $(".right").append("<div><h1>" + fna + " " + lna + "</h1>" + "<h4>Click here for more information</h4>" + "<p>" + desc + "</p>"
                            + "<h5>Click here to return to previous information.</h5></div>");
        $('p').hide();
        $('h5').hide();
        return false;
    });
    $(document).on('click', 'h4', function(){
        $('h1').hide();
        $('h4').hide();
        $('p').show();
        $('h5').show();
    });
    $(document).on('click', 'h5', function(){
        $('h1').show();
        $('h4').show();
        $('p').hide();
        $('h5').hide();
    });
})