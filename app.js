const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const postController = require('./controller/postController');

const app = express();

//Mongodb connection
mongoose.connect('mongodb://localhost/cleanblog-test-db');

//Middleware
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));

//Routes
app.get('/', postController.getAllPosts);
app.get('/add_post', postController.getAddPostPage);
app.post('/posts', postController.createPost);
app.get('/post-detail/:id', postController.postDetailPage);
app.get('/post/edit/:id', postController.postEditPageWithId);
app.put('/post/:id', postController.updatePost);
app.delete('/post/delete/:id', postController.deletePost);

app.get('/about', (req, res) => {
    res.render('about');
});

const port = 8080;

app.listen(port, () => {
    console.log('server listen on 8080 port');
});
