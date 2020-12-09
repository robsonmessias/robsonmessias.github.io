const express = requir('express');
const app = express();


app.get('/node', (req, res) => {
    res.send('Funcionou!!!')
});
