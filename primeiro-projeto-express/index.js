const express = require('express');
const app = express();
const PORT = 3000;

app.get('/users', (req, resp) => {
    resp.send('ola mundo');
});

app.listen(PORT, () => console.log('server is running...'));