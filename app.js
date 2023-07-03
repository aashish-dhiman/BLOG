const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const mongodb_URI = process.env.MONGODB_URI;

mongoose.connect(mongodb_URI, {
    useNewUrlParser: true,
});

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const Post = mongoose.model("Post", blogSchema);

const PORT = 3000 || process.env.PORT;

app.get("/", async (req, res) => {
    const posts = await Post.find({});
    res.render("home", {
        posts: posts,
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/compose", (req, res) => {
    res.render("compose");
});

app.post("/compose", (req, res) => {
    const post = new Post({
        title: req.body.postTitle,
        content: req.body.postContent,
    });
    post.save();
    res.redirect("/");
});

app.post("/delete", async (req, res) => {
    const id = req.body.id;

    await Post.findByIdAndDelete(id);
    res.redirect("/");
});

//express routing technique
app.get("/posts/:postID", async (req, res) => {
    const postID = req.params.postID;

    const post = await Post.findById(postID).exec();
    res.render("post", {
        postData: post,
    });
});

app.listen(PORT, function () {
    console.log("Server started on port " + PORT);
});

module.exports = app;
