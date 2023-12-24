import express, { json } from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import authRoute from "./routes/auth";
import userRoute from "./routes/users";
import postRoute from "./routes/posts";
import categoryRoute from "./routes/categories";
import multer, { diskStorage } from "multer";


const app = express();
config();
app.use(json());


connect("127.0.0.1:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
    console.log("Backend is running.");
});
