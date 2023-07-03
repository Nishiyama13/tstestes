import Joi from "joi";
import { CreateUser } from "../protocols";

//Generics
const userSchema = Joi.object<CreateUser>({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
})

export default userSchema;