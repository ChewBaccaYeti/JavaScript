const WebSocket = require('ws');

const PORT = 8080;
const wss = new WebSocket.Server({ port: PORT });

let clients = [];

wss.on('connection', ws => {
    console.log('Connected to server');
    let id = clients.length;
    clients[id] = ws;
    console.log(`New connection #${id}`);

    // Open connection
    ws.onopen = () => {
        console.log('Connection opened');
    };

    // Message receiving
    ws.onmessage = e => {
        console.log('Received message from server:', e);
    };

    // Error on connection
    ws.onerror = error => {
        console.log('Connection failed:', error.message);
    };

    // Sending message to the client
    ws.send('Hi, client!');
    clients[id].send(`Hello, you get number: №${id}`);

    // Receiving message from the client
    ws.on('message', message => {
        console.log('Received message', message);
        ws.send(`You said ${message}`);
    });

    // Sending to others
    clients.forEach((item, index) => {
        if (index !== clients.id) {
            item.send(`New member №${id} is connected`);
        }
    });

    // Close connection
    ws.onclose = () => {
        console.log('Connection with server closed');
    };
    ws.on('close', () => {
        console.log('Shutting connection');
    });
});

console.log(`WebSocket server connected on ${PORT}`);
