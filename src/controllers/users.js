import {Users} from "../models/";

export const allUsers = async (req, res) =>{
    try {
        const results = await Users.findAll();
        res.json(results);
    } catch (error) {
        console.log(error)
    }
}
export const idUser = async (req, res) => {
    try {
        const results = await Users.findOne({where: {id: req.params.id}});
        res.json(results);
    } catch (error) {
        console.log(error);
    }
}