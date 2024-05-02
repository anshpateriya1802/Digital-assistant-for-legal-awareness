const jwt = require("jsonwebtoken");


const secretKey = "ansh@123"

function setUser(user, logOut = false) {

    if (logOut) {
        const payLoad = {
            type: "logOutToke",
            exp: Math.floor(Date.now() / 1000) + 5,
        }
        return jwt.sign(payLoad, secretKey)

    }

    const expiresInDays = 7;
    const expirationInSeconds = expiresInDays * 24 * 60 * 60;



    const payLoad = {
        user: user.name,
        email: user.email,
        exp: Math.floor(Date.now() / 1000) + expirationInSeconds
    }
    return jwt.sign(payLoad, secretKey)
}

function getUser(token) {
    try{

        if (!token) return null;
        return jwt.verify(token, secretKey);
    }catch(e){
       return null
    }
    }

module.exports = {
    setUser,
    getUser
}