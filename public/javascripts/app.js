$(document).ready(function(){

    function getImages(){
    for(var i = 0; i < 5; i++) {


        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/images/" + i,

        }).done(function (data) {
            var $li = $('<li>', {id: elem.id});
            var $img = $('<img>');
            $img.attr({'href': elem.url, 'alt': elem.name});
            $li.append($img);
            $('#imageDeck').append($li);

        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('There was an error: ', errorThrown);

        }).always(function () {
            console.log('AJAX call complete');
        });
    }
    }



});