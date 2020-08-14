const express = requir('express');
const app = express();
const venom = require('venom-bot');

app.get('/node', (req, res) => {
    res.send('Funcionou!!!')
});