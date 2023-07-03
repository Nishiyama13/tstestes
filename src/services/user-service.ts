import { User, CreateUser } from "../protocols";
import * as userRepository from "../repositories/user-repository";

//const users: User[] = [];       //array com todos os user cadastrados

async function getUsers(): Promise<User[]>{
    const users = await userRepository.findAllUsers()
    return users;
}

async function getUsersById(id: string): Promise<User>{
    const user = await userRepository.getUserById(id);
    return user;
}

async function createUser(user: CreateUser): Promise<CreateUser> {
    const existingUser = await userRepository.getUserByEmail(user.email)
    if(existingUser){
        throw new Error("Registration failed")
    }
    
    await userRepository.createUser(user)
    return user;
}

async function updateUser(id: string, updateUser: User): Promise<CreateUser> {
    const user = await userRepository.updateUser(id, updateUser)
    return user;
}

async function deleteUser(id: string): Promise<User | null> {
    const user = await userRepository.deleteUser(id);
    return user;
}

const userService = {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
}

export default userService;

