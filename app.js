const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const Post = require('./models/Post');


const app = express();
//mongodb connection
mongoose.connect('mongodb://localhost/cleanblog-test-db');


//middleware
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async(req, res) => {
    const posts = await Post.find({}); 
    res.render('index', {
        posts
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})


app.get('/add_post', (req, res) => {
    res.render('add_post');
})

app.post('/posts', async (req, res) => {
    await Post.create(req.body);
    console.log(req.body);
    res.redirect('/');
})

app.get('/post-detail', (req, res) => {
    res.render('post');
})

const port = 8080;
app.listen(port, () => {
    console.log('server listen on 8080 port');
});
