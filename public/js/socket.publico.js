var socket = io();
var lbTicket1 = $('#lblTicket1');
var lbTicket2 = $('#lblTicket2');
var lbTicket3 = $('#lblTicket3');
var lbTicket4 = $('#lblTicket4');

var lbEscritorio1 = $('#lblEscritorio1');
var lbEscritorio2 = $('#lblEscritorio2');
var lbEscritorio3 = $('#lblEscritorio3');
var lbEscritorio4 = $('#lblEscritorio4');

var lbTickets = [lbTicket1, lbTicket2, lbTicket3, lbTicket4];
var lbEscritorios = [lbEscritorio1, lbEscritorio2, lbEscritorio3, lbEscritorio4];

socket.on('estadoActual', function(data) {
    //console.log(data);
    actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {
    //console.log(data);
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {
    for (var i = 0; i <= ultimos4.length - 1; i++) {
        lbTickets[i].text('Ticket ' + ultimos4[i].numero);
        lbEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
    }
}