const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent =
    "Lorem ipsum dolor sit amet. Sed quia necessitatibus et velit dolorem est velit consectetur non laborum dolores et voluptas animi et molestias velit vel nihil dicta. Vel reprehenderit expedita et omnis sunt ea voluptatibus quas et deserunt pariatur et corrupti recusandae ut ducimus veritatis. 33 molestias similique sit voluptates voluptatem non illo doloremque est porro temporibus est explicabo voluptas qui sint similique qui porro ullam. Est aliquam omnis et magni beatae est voluptatum obcaecati sed corrupti ipsum et mollitia dolorum aut reprehenderit libero? Est nobis porro non mollitia minus qui facere aliquid. Ut optio porro est autem quas eum dicta inventore aut suscipit recusandae et commodi voluptatem ut dolor perferendis ut amet inventore.";
const aboutContent =
    "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
    "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const PORT = 3000 || process.env.PORT;

const posts = [];

app.get("/", (req, res) => {
    res.render("home", {
        startingContent: homeStartingContent,
        posts: posts,
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        aboutContent: aboutContent,
    });
});

app.get("/contact", (req, res) => {
    res.render("contact", {
        contactContent: contactContent,
    });
});

app.get("/compose", (req, res) => {
    res.render("compose");
});

app.post("/compose", (req, res) => {
    // console.log(req.body.postTitle);
    // console.log(req.body.postContent);
    const post = {
        title: req.body.postTitle,
        content: req.body.postContent,
    };

    posts.push(post);
    // console.log(posts);
    res.redirect("/");
});

//express routing technique
app.get("/posts/:postName", (req, res) => {
    // console.log(req.params.postName);
    const requestedTitle = _.lowerCase(req.params.postName);

    posts.forEach((post) => {
        let storedTitle = _.lowerCase(post.title);

        if (requestedTitle === storedTitle) {
            // console.log("Match found");
            res.render("post", {
                postData: post,
            });
        }
    });
});

app.listen(PORT, function () {
    console.log("Server started on port 3000");
});

module.exports = app;
