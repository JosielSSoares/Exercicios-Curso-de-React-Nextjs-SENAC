import db from '@/app/api/database';

export async function GET (){

    try {
        const [rows] = await db.query<any>("SELECT * FROM usuarios")
        if(rows.length > 0){
            return new Response(JSON.stringify (rows),{
            headers: {'Content-Type':'application/json'}
            })
        }else{
            return new Response(JSON.stringify({erro:"Usuario não encontrado"}))
        }
    }catch (erro) {
        return new Response(JSON.stringify({erro: erro}), 
        {status: 500}
    )}
}

export async function POST (request: Request){

    try{
        const {name, email} = await request.json();
        const [result] = await db.query<any>("INSERT INTO usuarios (name, email) VALUES (?,?)",[name,email])
        return new Response(JSON.stringify(result),{
        status: 201,
        headers: {'Content-Type':'application/json'}
        })

    }catch (erro) {
        return new Response(JSON.stringify({erro: erro}), 
        {status: 500}
    )}
}

export async function PUT (resquest: Request, {params}: {params: Promise<{id: string}>}){
    
    try{
        const {id, name, email} = await resquest.json();
        await db.query("UPDATE usuarios SET name=?, email=? where id=?",{name, email} )
        return new Response(JSON.stringify({value: true}))

    }catch(erro){
        return new Response(JSON.stringify({erro:erro}),
        {status: 500}   
    )}
}

    
