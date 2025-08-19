"use client"

import { Salvar } from "@/app/(servicos)/usuarios";
import { userProps } from "@/tipos";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function FormularioUser({ id, nome = "", email = "" }: userProps) {
    const [UserID, setUserID] = useState<number | undefined>(id)
    const [userNome, setUserNome] = useState(nome);
    const [userEmail, setUserEmail] = useState(email);
    const [mensagem, setMensagem] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState('')
    const rota = useRouter();

    async function Submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMensagem('');

        const formulario = {
            id: UserID,
            nome: userNome,
            email: userEmail
        }

        try {
            const metodo = UserID ? "PUT" : "POST"
            await Salvar(formulario, metodo)
            setTipoMensagem('sucesso');
            setMensagem(UserID ? 'Usuário editado com sucesso!' : 'Usuário cadastrado com sucesso!');
            setTimeout(() => {
                rota.push("/")
            }, 2500);

        } catch (error) {
            setTipoMensagem('erro')
            setMensagem('Ocorreu um erro ao salvar, verifique os dados novamente')
            console.log("PUT ou POST não executado")
        }
    }

    async function Deletar() {
        await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuarios`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: UserID })
        })
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
                {/* ✨ BLOCO QUE EXIBE A MENSAGEM ✨ */}
                {mensagem && (
                    <div className={`p-3 mb-4 rounded-md text-center text-sm font-medium ${tipoMensagem === 'sucesso'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'}`}>{mensagem}
                    </div>
                )}
                {/* 1. FORMULÁRIO COM FLEXBOX VERTICAL:
                - `flex flex-col` empilha os grupos de campos e os botões.
                - `gap-y-6` adiciona um espaço vertical consistente entre eles.*/}
                <form className="flex flex-col gap-y-6" onSubmit={Submit}>
                    {/* Grupo do campo "Nome" */}
                    <div>
                        {/* Usar <label> é melhor para acessibilidade */}
                        <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-700">Nome:</label>
                        <input id="nome" value={userNome} onChange={(e) => setUserNome(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Digite seu nome" />
                    </div>

                    {/* Grupo do campo "Email" */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
                        <input id="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email" placeholder="Digite seu email" />
                    </div>
                    {/* 2. CONTAINER DOS BOTÕES COM FLEXBOX HORIZONTAL:
                    - `flex` alinha os botões em linha (lado a lado).
                    - `gap-x-4` adiciona um espaço horizontal entre eles.
                    - `mt-2` adiciona uma margem no topo para separar dos inputs.
                    */}
                    <div className="flex items-center gap-x-4 mt-2">
                        {UserID ? (
                            <button type="submit" className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">Salvar Edição</button>
                        ) : (
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Cadastrar</button>
                        )}
                        {UserID && (
                            <button onClick={Deletar} className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">Excluir</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )

}