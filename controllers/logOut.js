

const  {setUser} = require("../service/auth")

async function handleLogOut(req,res){
    const user = {
    }
        const token = setUser(user,true);
        res.cookie("jwtToken", token);
    return res.end();
}

module.exports={
    handleLogOut
}