const jwt = require('jsonwebtoken');
export default function generateAccessToken(user){
    return jwt.sign(
        user, 
        process.env.REACT_APP_TOKEN_SECRET,
        {expiresIn: "10m"}
        )
}