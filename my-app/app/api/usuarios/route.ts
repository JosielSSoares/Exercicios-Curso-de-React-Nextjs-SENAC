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
        const {nome, email} = await request.json();
        const [result] = await db.query<any>("INSERT INTO usuarios (nome, email) VALUES (?,?)",[nome,email])
        return new Response(JSON.stringify(result),{
        status: 201,
        headers: {'Content-Type':'application/json'}
        })

    }catch (erro) {
        return new Response(JSON.stringify({erro: erro}), 
        {status: 500}
    )}
}

export async function PUT (request: Request, {params}: {params: Promise<{id: string}>}){
    
    try{
        const {id, nome, email} = await request.json();
        await db.query("UPDATE usuarios SET nome=?, email=? where id=?",[nome, email, id] )
        return new Response(JSON.stringify({value: true}))

    }catch(erro){
        return new Response(JSON.stringify({erro:erro}),
        {status: 500}   
    )}
}

export async function DELETE (request:Request){

    const {id} = await request.json();
    await db.query("DELETE FROM usuarios WHERE id = ?", [id])
    return Response.json({sucesso: true})
}


