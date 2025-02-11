var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: 'c501772793db47579c1e54c08baca388',
    clientSecret: 'fdabee25fc9f41e990de6a9467618302'
});

spotifyApi.clientCredentialsGrant().then(
    function (data) {
        console.log("The access token expires in " + data.body['expires_in']);
        console.log("The access token is " + data.body['access_token']);


        spotifyApi.setAccessToken(data.body['access_token']);

    },
    function(err) {
        console.log(
            "Something went wrong when retrieving and access token",
            err.message
        );
    }
);

app.use(express.static('public'));

app.get('/', function(req,res) {
    res.send("Hello")
});

app.listen(8080);