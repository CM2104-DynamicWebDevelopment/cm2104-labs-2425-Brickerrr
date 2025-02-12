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

app.get('/searchLove', function (req,res) {
    getTracks('love', res);
});

async function getTracks(searchterm, res) {
    spotifyApi.searchTracks(searchterm)
    .then(function(data) {
        var tracks = data.body.tracks.items
        var htmlResponse = "";

        for (var i =0; i <tracks.length;i++) {
            var track = tracks[i];
            console.log(track.name);
            htmlResponse = htmlResponse + 
            "<div>" +
            "<h2>"+track.name+"</h2>"+
            "<h4>"+track.artists[0].name+"</h4>"+
            "<img src='"+track.album.images[0].url +"'>"+
            "<a href='"+track.external_urls.spotify+"'> Track Details </a>"+
            "</div>";
            console.log(htmlResponse);
        }
        res.send(htmlResponse);
    }, function(err) {
        console.error(err);
    });
}

app.get('/search', function (req,res ) {
    var searchterm = req.query.searchterm;
    getTracks(searchterm,res);
});

async function getTopTracks(artist, res) {
    spotifyApi.getArtistTopTracks(artist, 'GB')
    .then(function (data) {
    console.log(data.body);
    res,send(data.body);
    }, function (err) {
    console.log('Something went wrong!', err);
    });
}

app.get('/topSearch', function(req, res) {
    var topterm = req.query.topterm;
    console.log("term is" +topterm);
    getTopTracks(topterm,res);
})

app.listen(8080);