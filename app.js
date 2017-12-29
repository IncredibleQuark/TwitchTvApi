//created by Łukasz Kupiński on 29.12.2017

$( document ).ready(function() {

let streams = ['blackfireice', 'freecodecamp', 'mkrr3', 'indystarcraft', 'nervarien', 'bixentehs'];


streams.forEach(function (stream) {

    callTwitch(stream);
});


//to make this fnc work you need to allow CORS
    function callTwitch(stream) {
        $.ajax({
            mode: 'cors',
            type: 'GET',
            crossDomain: true,
            url: 'https://wind-bow.gomix.me/twitch-api/users/' + stream,
            dataType: 'json'

        }).done((data) => {

            const listItem = $('<li class="list-group-item"></li>');
            const container = $('<div class="inline-block"></div>');
            container.appendTo(listItem);
            const link = $('<a>' + data.display_name + '</a>');
            const light = $('<div class="lights inline-block m-l-m"></div>');

                $.ajax({
                    mode: 'cors',
                    type: 'GET',
                    crossDomain: true,
                    url: 'https://wind-bow.gomix.me/twitch-api/streams/' + stream,
                    dataType: 'json'

                }).done((data1) => {

                    if(data1.stream) {

                        link.attr('href', data1.stream.channel.url);
                        light.addClass('lights-on');
                        console.log(data.logo);
                        const img = $('<img alt="preview" class="right" src=' + data1.stream.preview.medium + '/>');
                        img.appendTo(listItem);

                        return true;
                    } else {
                        light.addClass('lights-off');
                        return false;
                    }

                }).fail((err) => {
                    console.error('Something went wrong!');
                    console.log(err);
                    return false;
                });


            listItem.appendTo('#streamers');
            link.appendTo(container);
            light.appendTo(container);


        }).fail((err) => {
            console.error('Something went wrong!');
            console.log(err);
            return false;
        });
    }


});