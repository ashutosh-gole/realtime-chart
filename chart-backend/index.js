let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
let http = require('http');
let socketIO = require('socket.io');

app.use(cors())
app.use(bodyParser.json())

let server = http.Server(app);
let io = socketIO(server, {
    path: '/',
    serveClient: false,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false,
    cors: '*'
}
);

const port = process.env.PORT || 5000;

// io.on('connection', (socket) => {
//     console.log('user connected');

//     socket.on('new-message', (message) => {
//       console.log(message);
//     });
// });

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    sendData(socket);
});

let x = true;

function sendData(socket) {
    if (x) {
        socket.emit('data1', Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10));
        x = !x;
    } else {
        socket.emit('data2', Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10));
        x = !x;
    }

    setTimeout(() => {
        sendData(socket);
    }, 10000);
}

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});

// app.get('/', (req, res) => {
//     res.send('<h1>Hey Socket.io</h1>');
// });