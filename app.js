const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log('server listen on 8080 port');
});

app.get('/', (req, res) => {
    res.send('Merhaba');
    res.status(200);
    
})