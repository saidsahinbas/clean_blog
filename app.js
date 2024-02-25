const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log('server listen on 8080 port');
});

app.get('/', (req, res) => {
    const blog = { id: 1, title: "Blog title", description: "Blog description" }
    res.send(blog);
    res.status(200);

})