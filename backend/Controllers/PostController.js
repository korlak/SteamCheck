import PostModel from '../models/Post.js';

export const create = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId,
        });

        const post = await doc.save()
        res.json(post)
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: `Something went wrong`,
        })
    }
}
export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find().populate({path: "user", select: ["name", "avatar"]}).exec()

        res.json(posts)
    } catch (err) {
        return res.status(500).json({
            message: `Something went wrong`,
        })
    }
}
export const getOne = async (req, res) => {
    try {
        const postId = req.params.id

        PostModel.findOneAndUpdate(
            {
                _id: postId,
            },
        {
                $inc: {viewsCount: 1}
            },
        {
                returnDocument: 'after',
            })
            .then(doc => res.json(doc))
            .catch(err => res.status(500).json({
                message:'Контент не знайдено'
            }))
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: `Something went wrong`,
        })
    }
}
export const remove = async (req, res) => {
    try {
        const postId = req.params.id
        PostModel.findOneAndDelete({
            _id: postId,
        }).then(doc => res.json({ success: true }))
            .catch(err => res.status(500).json({
                message: `Контент не знайдено`,
            }))

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: `Something went wrong`,
        })
    }
}
export const update = async (req, res) => {
    try {
       const postId = req.params.id
        await PostModel.updateOne({
            _id: postId,
        },{
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId,
        })
        res.json({success: true})
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: `Не вдалось обновити статтю`,
        })
    }
}
