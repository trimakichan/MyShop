import jwt from  'jsonwebtoken'

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    }) //{id:id} Token needs 2 information to generate token

}

export default generateToken