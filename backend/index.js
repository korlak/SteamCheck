import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import SteamAPI from 'steamapi';
import cors from 'cors';
import { mongo, steamAPIid } from './config/config.js'

import { registerValidation, loginValidation, postCreateValidation } from './vallidations.js'
import checkAuth from "./utils/checkAuth.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";
import { UserController, PostController } from "./Controllers/index.js";

const PORT = process.env.PORT || 3001;
mongoose.connect(mongo).then(() => {process.env.mongoEnv
    console.log('MongoDB Connected')
}).catch(err => console.log('DB error', err));

const app = express();
const steam = new SteamAPI(process.env.SteamAPIenv);
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'backend/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);
app.get('/posts/getAll', checkAuth, PostController.getAll)
app.get('/posts/getOne/:id', checkAuth, PostController.getOne)
app.post('/posts/create', checkAuth, postCreateValidation, PostController.create)
app.delete('/posts/delete/:id', checkAuth, PostController.remove)
app.patch('/posts/patch/:id', checkAuth, postCreateValidation, PostController.update)

app.get("/steam/userGames/:id", async (req, res) => {
    try {
        const summary = await steam.getUserOwnedGames(req.params.id,
            { includeExtendedAppInfo: true }
        );
        res.json({ message: summary });
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
            res.json({ completed: { unlockedCount }, fullAmount: { achvAmount } });
        } catch (e) {
            res.json({ completed:0, fullAmount: 0 });

        }
    } catch (err) {
        console.error(err);
        return res.status(404).json({
            message: "Something went wrong",
        });
    }
});

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});
app.get("/test", async (req, res) => {
    res.json({ message: "Server Work" })
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


