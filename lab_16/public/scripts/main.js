var socket = io();

socket.on('chat message', function(msg) {
    $('#messages').append("<li>"+ msg+"</>");
    window.scrollTo(0, document.body.scrollHeight);
})