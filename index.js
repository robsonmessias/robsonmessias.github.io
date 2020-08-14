const express = requir('express');
const app = express();
const venom = require('venom-bot');

app.get('/', (req, res) => {
    res.send('Funcionou!!!')
});