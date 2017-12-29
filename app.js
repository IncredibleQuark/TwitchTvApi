//created by Łukasz Kupiński on 29.12.2017

$( document ).ready(function() {

let streams = ['blackfireice', 'freecodecamp'];


streams.forEach(function (stream) {

    callTwitch(stream);
});


//to make this fnc work you need to allow CORS
    function callTwitch(stream) {
        $.ajax({
            mode: 'cors',
            type: 'GET',
            url: 'https://wind-bow.gomix.me/twitch-api/users/' + stream,
            dataType: 'json'

        }).done((data) => {
console.warn(data);
            const link = $('<a>'+data.display_name+'</a>');
            const listItem = $('<li class="list-group-item"></li>');

            if (data) {

                $.ajax({
                    mode: 'cors',
                    type: 'GET',
                    url: 'https://wind-bow.gomix.me/twitch-api/streams/'+stream,
                    dataType: 'json'

                }).done((data1) => {


                    console.log(data1);

                    if(data1.stream) {

                        link.attr('href', data1.stream.channel.url);
                        const img = $('<img alt="preview" class="right" src='+data1.stream.preview.medium+'/>');
                        img.appendTo(listItem);


                        return true;
                    } else {
                        return false;
                    }

                }).fail((err) => {
                    console.error('Something went wrong!');
                    console.log(err);
                    return false;
                });

            }
            listItem.appendTo('#streamers');
            link.appendTo(listItem);


        }).fail((err) => {
            console.error('Something went wrong!');
            console.log(err);
            return false;
        });
    }


});