import express, { Request, Response, json } from "express";
import userRouter from "./routers/user-router";


const app = express();
app.use(json());
app.use(userRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

/*
app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("I am ok!");
});
*/

/*
const user: User = {
    name: "Alicia",
    email: "alicia@email.com",
    password: "alicia123"
}

function checkUser(user: User){
    console.log(user);
}

checkUser(user);
*/