import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import SteamAPI from 'steamapi';
import cors from 'cors';
import { mongo, steamAPIid} from './config/config.js'

import {registerValidation, loginValidation, postCreateValidation} from './vallidations.js'
import checkAuth from "./utils/checkAuth.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";
import {UserController, PostController} from "./Controllers/index.js";
import PostModel from "./models/Post.js";

const PORT = process.env.PORT || 3001;
mongoose.connect(mongo
).then(() => {
    console.log('MongoDB Connected')
}).catch(err => console.log('DB error', err));

const app = express();
const steam = new SteamAPI(steamAPIid);


const storage = multer.diskStorage({
    destination: (__, ___, cb) => {
        cb(null, 'uploads');
    },
    filename: (__, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({storage: storage});

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.post('/auth/me', checkAuth, UserController.getMe);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});

app.get('/posts', checkAuth, PostController.getAll)
app.get('/posts/:id', checkAuth, PostController.getOne)
app.post('/posts', checkAuth, postCreateValidation, postCreateValidation, PostController.create)
app.delete('/posts/:id', checkAuth, PostController.remove)
app.patch('/posts/:id', checkAuth, postCreateValidation, PostController.update)
app.get("/api", async (req, res) => {
    res.json({message: "Work"})
})
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

app.get("/steam/userGames", async (req, res) => {
    try {
        const summary = await steam.getUserOwnedGames("76561198951455714",
            {includeExtendedAppInfo: true}
        );
        res.json({message: summary});
    } catch (err) {
        console.error(err);
        return res.status(404).json({
            message: "Something went wrong",
        });
    }
});
app.get("/steam/userGameAchievements/:userId/:gameId", async (req, res) => {
    try {
        const userId = req.params.userId
        const gameId = req.params.gameId
        try {
            const achievements = steam.getUserAchievements(userId, gameId)
            const achvAmount = (await achievements).achievements.length
            const unlockedAchievements = (await achievements).achievements.filter(achv => achv.unlocked === true);
            const unlockedCount = unlockedAchievements.length;

            res.json({completed: {unlockedCount},fullAmount: {achvAmount}});
        } catch (e) {
            res.json({message: `-/-`});
        }
    } catch (err) {
        console.error(err);
        return res.status(404).json({
            message: "Something went wrong",
        });
    }
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

