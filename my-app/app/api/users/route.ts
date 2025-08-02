import db from '@/app/api/database';

export async function GET (request: Request){
// const users = [
//     {id:1, name: "josiel"},
//     {id:2, name: "Aloy"}
//     ]

    try {
        const [rows] = await db.query("SELECT * FROM users")
        return new Response(JSON.stringify (rows), {
            status: 200,
            headers: {'Content-Type':'application/json'}
        })
    } 
    
    catch (erro) {
        return new Response(JSON.stringify({erro: erro}), 
        {status: 500}
    )}
}

    
