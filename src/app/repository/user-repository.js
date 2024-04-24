const Model = require("../models");
const BaseRepository = require('./base-repository');
const Exception = require("../exceptions/exception");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
class UserRepository extends BaseRepository
{
    constructor() {
        super(Model.User);
    }
    storeUser = async (data)=>{
      if(await this.findOne("email" , data.email)){
          throw new Exception("Email is already exists", 422);
      }
      return await this.store(data);
    }
    loginUser = async (data)=>{
        const user = await this.findOne("email" , data.email);
        if(!user){
            throw new Exception("Email or password is incorrect", 401);
        }
        if(!await bcrypt.compare(data.password, user.password)){
            throw new Exception("Email or password is incorrect" , 401);
        }
            const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, {
                expiresIn: process.env.JWT_REFRESH_EXPIRATION
            });

        return {user,token};
    }
}
module.exports  = new UserRepository();