import { connection } from "../database/database";
import { CreateUser, User } from "../protocols";

export async function findAllUsers(): Promise<User[]> {
    const query = `SELECT * FROM users`;
    const result = await connection.query<User>(query);

    return result.rows;
}

export async function getUserById(id:string): Promise<User> {
    const query = `SELECT * FROM users WHERE id=$1`
    const value = [id];
    const result = await connection.query<User>(query, value);

    return result.rows[0];
}

export async function getUserByEmail(email:string): Promise<User | null> {
    const query = `SELECT * FROM users WHERE email=$1`
    const value = [email];
    const result = await connection.query<User>(query, value);
    if(result.rows.length > 0){
        return result.rows[0];
    }
    return null;
}

export async function createUser(user: CreateUser): Promise<void>{
    const query = `INSERT INTO users (name, email, password) VALUES ($1,$2,$3)`
    const values = [user.name, user.email, user.password];

    await connection.query(query, values);
}

export async function updateUser(id:string, updateUser: CreateUser){
    const query = `UPDATE users SET name = $1, email = $2, password = $3 WHERE id= $4 RETURNING *`;
    const values = [updateUser.name, updateUser.email, updateUser.password,id];

    const result = await connection.query(query, values);
    return result.rows[0];
}

export async function deleteUser(id: string){
    const query = `DELETE FROM users WHERE id = $1 RETURNING *`;
    const value = [id];

    const result = await connection.query(query, value);
    return result.rows[0];
}
