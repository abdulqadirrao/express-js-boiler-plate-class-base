const UserRepository = require("../repository/user-repository");
const bcrypt = require('bcryptjs');
class AuthController{
    #repository
    constructor() {
    this.#repository = UserRepository;
    }
    register = async (req , res , next) => {
        try
        {
        const request = req.body;
        request.password = await bcrypt.hash(request.password, 15);
        let user = await this.#repository.storeUser(req.body);
        return response(res).success("User saved successfully", user);
    }
        catch(error)
        {
         return response(res).error(error);
        }
    }
    login = async (req , res)=>{
        try{
            const user = await this.#repository.loginUser(req.body);
            return response(res).success("User logged in successfully", user);
        }
        catch (error)
        {
            return response(res).error(error);
        }

    }

}
module.exports =  new AuthController();