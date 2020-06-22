var dgram = require('dgram');
const {v4: uuid} = require('uuid');
var s = dgram.createSocket('udp4');

//Pour attribuer le port et l'adresse
const protocol = require('./protocol');

//liste des instruments et leurs sons
var instruments = new Map();
instruments.set("piano", "ti-ta-ti");
instruments.set("trumpet", "pouet");
instruments.set("flute", "trulu");
instruments.set("violin", "gzi-gzi");
instruments.set("drum", "boum-boum");

var instrument = new Object();

instrument.sound = instruments.get(process.argv[2]);
instrument.uuid = uuid();

console.log(instrument.sound);

var payload = JSON.stringify(instrument);

message = new Buffer(payload);

//interval définie un interval entre chaque envoie ici 1sec
setInterval(function () {
    s.send(message, 0, message.length, protocol.PROTOCOL_PORT, protocol.PROTOCOL_MULTICAST_ADDRESS, function (err, bytes) {
        console.log("Sending payload: " + payload + "via port " + s.address().port);
    })
}, 1000);

