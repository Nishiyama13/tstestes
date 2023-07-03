export type User = {
    id: number,
    name: string,
    email: string,
    password: string
}

export type CreateUser = Omit<User, "id">;

export enum Area{
    Eletrical = "Eletrical",
    Mechanical = "Mechanical",
    Naval = "Naval",
    Eletronic = "Eletronic",
    Marketing = "Marketing",
    Management = "Management"
}

type Tool = {
    name: string,
    quantity: number;
    description: string
}

export type Task = {
    id: number,
    user_id: number,
    name: string,
    task: string,
    area: Area,
    startsAt: Date,
    endsAt?: Date,
    createdAt: Date,
    updatedAt: Date,
    tools: Tool[]
}

export type CreateTask = Omit<Task, "id" | "createdAt" | "updatedAt">

