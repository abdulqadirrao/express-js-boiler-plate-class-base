class BaseRepository
{
    constructor(model) {
    this._model = model;
    }
    getModel = ()=>{
       return this._model;
    }
    where = async (column , value)=>{
        return await this.query({ [column]: value });
    }
    query = async (obj = {})=>{
        return await this._model.findAll(obj);
    }
    store = async  (data , fields = {})=>{
          return await this._model.create(data);
    }
    findOne = async (column , value)=>{
        return await this._model.findOne({
            where: {[column]:value}
        });
    }

}
module.exports = BaseRepository;