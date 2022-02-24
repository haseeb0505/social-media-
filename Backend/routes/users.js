const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/Users')

// update user
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                // hashing new password
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);

            } catch (error) {
                res.status(404).json(error);
            }

        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body })
            res.status(200).json('Account has been updated');
        } catch (error) {
            res.status(500).json(error);

        }
    } else {
        res.status(404).json('you can only update your account ')
    }
})

// delete user
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.deleteOne({ _id: req.params.id })
            res.status(200).json("Account has been deleted")
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(500).json("you can only delete your account ")
    }
})
// get  user
router.get("/", async (req, res) => {
    const userId = req.query.userId
    const username = req.query.username
    try {
        const user = userId ?
            await User.findById(userId)
            : await User.findOne({ username: username })
        const { password, updatedAt, createdAt, ...other } = user._doc
        res.status(200).json(other)

    } catch (error) {
        res.status(500).json(error);
    }
})

// follow user
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { following: req.params.id } });
                res.status(200).json("user has been followed")
            } else {
                res.status(500).json("you already following this user ")
            }


        } catch (error) {
            res.status(500).json(error);
        }

    } else {

        res.status(403).json("you cannot follow yourself")
    }

})
// unfollow user
router.put('/:id/unfollow', async function (req, res) {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { following: req.params.id } });
                res.status(200).json("user has been unfollowed")
            } else {
                res.status(500).json("you dont follow this user ")
            }


        } catch (error) {
            res.status(500).json(error);
        }

    } else {

        res.status(403).json("you cannot unfollow yourself")
    }


})


module.exports = router
