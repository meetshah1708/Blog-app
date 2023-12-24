import express from 'express'
const app = express();
import mongoose from 'mongoose'
import authrouter from './api/routes/auth.js'
import userrouter from './api/routes/users.js'
import postsrouter from './api/routes/posts.js'
import categoriesrouter from './api/routes/categories.js'


app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true

})
    .then(() => console.log("Connected"))
    .catch((e) => console.log(e));

app.use("/api/auth", authrouter);
app.use("/api/users", userrouter);
app.use("/api/posts", postsrouter);
app.use("/api/categories", categoriesrouter);

app.listen("5000", () => {
    console.log("Backend is running.At port 5000");
});