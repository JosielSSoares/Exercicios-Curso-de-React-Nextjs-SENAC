import FormularioUser from "@/componentes/formularioUser";
import { userProps } from "@/tipos";

export default async function EditarUsuario({params}: {params: Promise<{id: string}>}){

    const {id} = await params
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuarios/${id}`)
    const usuarios: userProps = await resposta.json();

    console.log(usuarios)

    return(
        <div>
            <FormularioUser id={usuarios.id} nome={usuarios.nome} email={usuarios.email}/>
        </div>
    )

}