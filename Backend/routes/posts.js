const router = require("express").Router();

const Post = require("../models/Post");
const User = require("../models/Users");

// create a post
router.post('/', async (req, res) => {

    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)


    } catch (error) {
        res.status(500).json("error while creating post")
    }
})

// update a post

router.put('/:id/update', async (req, res) => {

    try {
        const post = await Post.findById(req.params.id)
        if (req.body.userId === post.userId) {
            await post.updateOne(req.body)
            res.status(200).json("the post has been updated successfully")

        } else {
            res.status(403).json("you can update only your post ")

        }
    } catch (error) {
        res.status(500).json("error while updating post")
    }
})
// delete a post
router.delete('/:id', async (req, res) => {

    try {
        const post = await Post.findById(req.params.id)
        if (req.body.userId === post.userId) {
            await post.deleteOne({ _id: req.params.id })
            res.status(200).json("the post has been deleted successfully")

        } else {
            res.status(403).json("you can delete only your post ")

        }
    } catch (error) {
        res.status(500).json("error while deleting post")
    }
})
// like / dislike a post
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        console.log(post)
        if (!post.likes.includes(req.body.userId)) {
            await Post.updateOne({ _id: req.params.id }, { $push: { likes: req.body.userId } })
            res.status(200).json(" the post has been liked")
        } else {
            await Post.updateOne({ _id: req.params.id }, { $pull: { likes: req.body.userId } })
            res.status(200).json(" the post has been disliked")

        }
    } catch (error) {
        res.status(500).json(err)
    }

})

// get a post

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json("error getting post")

    }
})
// get all posts
router.get("/timeline/:userId", async (req, res) => {

    try {
        const currentUser = await User.findById(req.params.userId)
        const posts = await Post.find({ userId: currentUser._id })
        const frinedPosts = await Promise.all(
            currentUser.following.map((friendId) => {
                return Post.find({ userId: friendId })

            })
        );
        res.status(200).json(posts.concat(...frinedPosts))


    } catch (error) {
        res.status(500).json(error)

    }
})
// get all posts of a user
router.get("/profile/:username", async (req, res) => {

    try {
        const user = await User.findOne({ username: req.params.username })
        const post = await Post.find({ userId: user._id })

        res.status(200).json(post)

    } catch (error) {
        res.status(500).json(error)

    }
})

module.exports = router