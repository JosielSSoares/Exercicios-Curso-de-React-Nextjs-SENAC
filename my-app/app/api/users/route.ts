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
            
        })
    } 
    
    catch (erro) {
        return new Response(JSON.stringify({erro: erro}), 
        {status: 500}
    )}
}

export async function POST (request: Request){

    
    const {name, email} = await request.json();
    const [result] = await db.query("INSERT INTO users (name, email) VALUES (?,?)",[name,email])
    return new Response(JSON.stringify(result),{
        status: 201,
        headers: {'Content-Type':'application/json'}
    })

}

export async function PUT (resquest: Request, {params}: {params: Promise<{id: string}>}){
    
    const {id, name, email} = await resquest.json();

    await db.query("UPDATE user SET name=?, email=? where id=?",{name, email} )
    return new Response(JSON.stringify({value: true}))
    
}

    
