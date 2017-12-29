//created by Łukasz Kupiński on 29.12.2017

$( document ).ready(function() {


    function callTwich() {
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/users/quarkincredible?client_id=jvomfm0gddh7dfs2vzd8yzcy3q80uk',
            dataType: 'json'

        }).done((data) => {
            console.log(data);
        }).fail((err) => {
            console.log(err);
        });
    }

    callTwich();

});