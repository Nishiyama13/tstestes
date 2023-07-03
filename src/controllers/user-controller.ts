import { Request, Response } from "express";
import userService from "../services/user-service";
import { CreateUser, User } from "../protocols";
import httpStatus from "http-status";


async function getUser(req: Request, res: Response){
    try {
        const user = await userService.getUsers();
        res.status(httpStatus.OK).send(user);       
    } catch(error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Internal Server Error"});
    }
}

async function getUserById(req: Request, res: Response){
    try {
        const id = req.params.id;
        const user = await userService.getUsersById(id);

        if(user){
            res.status(httpStatus.OK).send(user);
        } else{
            res.status(httpStatus.NOT_FOUND).send({message: "User not found"})
        }
               
    } catch(error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Internal Server Error"});
    }
}


async function createUser(req: Request, res: Response){
    const userData = req.body as CreateUser;

    try {
        const user = await userService.createUser(userData)
        //console.log(user);
        res.status(httpStatus.CREATED).send(user);
    } catch(error) {
        if(error.message === "Registration failed"){
            res.status(httpStatus.UNPROCESSABLE_ENTITY).send({message: "Registration failed"})
        }
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Internal Server Error"});
    }
}

async function updateUser(req: Request, res: Response){
    try {
        const id = req.params.id;
        const updateUser = req.body as User;

        const user = await userService.updateUser(id, updateUser);

        if(user){
            res.status(httpStatus.OK).send(user);
        } else{
            res.status(httpStatus.NOT_FOUND).send({message: "User not found"})
        }
               
    } catch(error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Internal Server Error"});
    }
}

async function deleteUser(req: Request, res: Response){
    try {
        const id = req.params.id;

        const user = await userService.deleteUser(id);

        if(user){
            res.status(httpStatus.OK).send(user);
        } else{
            res.status(httpStatus.NOT_FOUND).send({message: "User not found"})
        }
               
    } catch(error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Internal Server Error"});
    }
}


const userController = {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}

export default userController;