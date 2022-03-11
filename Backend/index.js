/**
 * social media  
 *
 * @author Haseeb Zahid
 *
 * : 
 */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");


dotenv.config()




mongoose
    .connect("mongodb+srv://haseeb:haseeb.0505@socailmedia.70ggi.mongodb.net/socialmedia?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

// middleWare
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json({ "message": "File uploaded successfully" });
    } catch (error) {

        console.log(error)
    }

})
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)


app.listen(5000, () => {
    console.log('backend server listening on port 5000');
});