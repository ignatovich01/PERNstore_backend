const {Type}  =require('../models/models')
const ApiError  = require('../error/ApiError')
class TypeController {
    async create (req,res){
        const {name}  = req.body;
        const item = await Type.findOne({where : {name}});
        if(item){
            return  res.status(403).json({message :'такой тип уже создан'})
        }
        const type =await Type.create({name})
         return res.json(type)
    }
    async getAll (req,res){
        const types = await Type.findAll();
        return res.json(types)
    }
}

module.exports = new TypeController();