"use client"

import { userProps } from "@/tipos";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function FormularioUser( {id, name="", email=""}:userProps){
    const [UserID, setUserID] = useState<number | undefined>()
    const [nome,  setNome] = useState(name);
    const [userEmail, setEmail] = useState(email);
    const rota = useRouter();

    async function Salvar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formulario = {
            id: UserID,
            name: nome,
            email: userEmail
        }

        try {
            const metodo = UserID ? "PUT" : "POST"
            const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuarios`,{
                method: metodo,
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(formulario)
            })

            alert("Cadastrado com Sucesso");
            const dados: userProps[] = await resposta.json()
                if(dados){
            rota.push("/");
            }
            
        } catch (error) {
            console.log("PUT ou POST não executado")
        }
    }

    return(
        <div>
            <form action="" onSubmit={Salvar}>
                <h2>Nome:</h2>
                <input value={nome} onChange={(e) => setNome(e.target.value)} className="border-gray-800" type="text" placeholder="digite seu nome" />

                <h2>Email:</h2>
                <input value={userEmail} onChange={(e) => setEmail(e.target.value)} className="border-gray-800" type="email" placeholder="digite seu email" />
                {UserID 
                    ?<button type="submit" className="bg-blue-500" >Editar</button> 
                    :<button type="submit" className="bg-blue-500" >Cadastrar</button> }
            </form>
        </div>
    )

}