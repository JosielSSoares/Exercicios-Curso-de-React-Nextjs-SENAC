import { request } from "http";
import db from "../../database";

export async function GET (resquest: Request, {params}: {params: Promise<{id: string}>}){
    const {id} = await params

    const [rows] = await db.query<any>("SELECT * FROM users where id = ? ",[id])

    return new Response(JSON.stringify(rows[0]),{
        status: 200,
        headers: {'Content-Type':'application/json'}
    })
}
