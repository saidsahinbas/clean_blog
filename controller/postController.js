const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find({}).sort("-createdAt");
    res.render('index', {
        posts
    });
};

exports.getAddPostPage = (req, res) => {
    res.render('add_post');
};

exports.createPost = async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
};

exports.postDetailPage = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', {
        post
    });
};

exports.postEditPageWithId = async (req, res) => {
    const post = await Post.findById({ _id: req.params.id });
    res.render('edit', {
        post
    });
};

exports.updatePost = async (req, res) => {
    const post = await Post.findById({ _id: req.params.id });
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();
    res.redirect(`/post-detail/${req.params.id}`);
};

exports.deletePost = async(req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
};