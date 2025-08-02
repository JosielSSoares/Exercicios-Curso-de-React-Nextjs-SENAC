"use client"

import { useState } from "react"

export default function FormularioUser(){

    const [nome,  setNome] = useState("");
    const [email, setEmail] = useState("");

     async function Salvar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(nome);

     }

    return(
        <div>
            <form action="" onSubmit={Salvar}>
                <h2>Nome:</h2>
                <input onChange={(e) => setNome(e.target.value)} className="border-gray-800" type="text" placeholder="digite seu nome" />

                <h2>Email:</h2>
                <input onChange={(e) => setEmail(e.target.value)} className="border-gray-800" type="email" placeholder="digite seu email" />

                <button type="submit" className="bg-blue-500" >Cadastrar</button>
            </form>
        </div>
    )

}