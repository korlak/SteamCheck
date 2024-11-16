import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace('Bearer ', '')
    if(token) {
        try {
            const detecoted = jwt.verify(token, 'secret123')

            req.userId = detecoted._id
            next()
        } catch (err) {
            return res.status(403).json({
                message: 'Немає доступу'
            })
        }
    }else{
        return res.status(401).json({
            message: 'Немає доступу'
        })
    }
}