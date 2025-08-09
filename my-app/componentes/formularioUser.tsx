"use client"

import { Salvar } from "@/app/(servicos)/usuarios";
import { userProps } from "@/tipos";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function FormularioUser( {id, nome="", email=""}:userProps){
    const [UserID, setUserID] = useState<number | undefined>()
    const [userNome,  setUserNome] = useState(nome);
    const [userEmail, setUserEmail] = useState(email);
    const rota = useRouter();

    async function Submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formulario = {
            id: UserID,
            nome: userNome,
            email: userEmail
        }
        
        try {
            const metodo = UserID ? "PUT" : "POST"
            await Salvar(formulario,metodo)
            rota.push("/")             
        } catch (error) {
            console.log("PUT ou POST não executado")
        }
    }

    async function Deletar(){
        await fetch (`${process.env.NEXT_PUBLIC_API_ROUTE}/usuarios`,{
            method: "DELETE",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({id: UserID})
        })
    }

    return(
        <div>
            <form action="" onSubmit={Submit}>
                <h2>Nome:</h2>
                <input value={userNome} onChange={(e) => setUserNome(e.target.value)} className="border-gray-800" type="text" placeholder="digite seu nome" />

                <h2>Email:</h2>
                <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="border-gray-800" type="email" placeholder="digite seu email" />

                {UserID ? <button type="submit" className="bg-blue-500" >Editar</button> : <button type="submit" className="bg-blue-500" >Cadastrar</button> }
                {UserID && <button className="bg-blue-500" onClick={Deletar}>Excluir</button>}
            </form>
        </div>
    )

}