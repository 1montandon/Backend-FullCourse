import jwt from 'jsonwebtoken'

function authMiddleware(req, res, next){
    const token = req.headers['authorization']

    if(!token){
        return res.status(401).json({message: "No token providade"})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {return res.status(401).json({message: "Invalid Token"})}
        req.userId = decoded.id
        console.log(req.userId)
        next()
    })
}

export default authMiddleware