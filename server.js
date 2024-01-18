const express = require('express');
const app = express();

app.use('/static', express.static('mychat'));

app.get('/', (req, res) => {
    res.send('hi');
});

app.get('/json', (req, res) => {
    res.json({ text: 'hi', numbers: [1, 2, 3] });
});

app.get('/echo', (req, res) => {
    const input = req.query.input || '';
    const shouty = input.toUpperCase();
    const characterCount = input.length;
    const backwards = input.split('').reverse().join('');

    res.json({ normal: input, shouty, characterCount, backwards });
});

let connections = [];
app.get('/sse', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    connections.push(res);

    req.on('close', () => {
        connections = connections.filter(conn => conn !== res);
    });
});

app.get('/chat', (req, res) => {
    const message = (req.query.message || '').trim();

    if (message) {
        let fullMessage;
        if (req.query.fromForm) {
            const username = req.query.username || 'You';
            fullMessage = `${username}: ${message}`;
        } else {
            fullMessage = `Anonymous: ${message}`;
        }

        connections.forEach(conn => conn.write(`data: ${fullMessage}\n\n`));
        res.status(200).send('Message sent');
    } else {
        res.status(400).send('No message content');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
