

import MenuVertical from "@/componentes/MenuVertical";
import { Children, useState } from "react";
import { Component } from "react";
import Header from "@/componentes/Header";
import Card from "@/componentes/Card";
import Footer from "@/componentes/Footer";
import { useEffect } from "react";
import Link from "next/link";
import { userProps } from "@/tipos";

// function Componente({children}: {children: React.ReactNode}){
//   return(
//     <div>
//         {children}
//     </div>
//   )
// }

// function acao() {
//   alert("Sucesso")
// // }
// type userProps = {


//   id: number,
//   title: string,
//   price: number,
//   description: string,
//   category: string,
//   image: string,
// }

export default async function Index() {

  // const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
  // const dados:userProps[] = await resposta.json();
  // console.log(dados)

  // await new Promise(resolve => setTimeout(resolve, 1500));
  // const resposta = await fetch("https://fakestoreapi.com/products");
  // const produtos: userProps[] = await resposta.json();

  const respota = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuarios`)
  const dados: userProps[] = await respota.json();

  // const [contador, setContador] = useState(0);
  // function Incrementar(){
  //   setContador (contador + 1);
  // }
  // function Decrementar(){
  //   setContador (contador - 1 )
  // }
  return (
    <div>
      {/* <div className="flex space-x-5">
        <div>
          <MenuVertical/>
        </div>

        <div className="flex flex-col py-1 space-y-1 w-screen">
          <Usuarios 
          titulo="Alice"
          email= "alice@gmail.com"
          botao="Saiba mais"
          funcao={acao}
          ></Usuarios>

        </div>
      </div> */}

      {/* <AreaUsuario
        titulo="Área do Usuário"
        botao=""
        decrementar={Decrementar}
      ><p>{contador}</p>
        
      {/* <Header/>
      <Card/>
      <div className="absolute inset-x-0 bottom-0"> */}

      <div className="flex justify-center items-center min-h-screen bg-gray-100">

        {/* 2. CONTAINER INTERNO: Agrupa todo o seu conteúdo em um único bloco. */}
        <div className="w-full max-w-lg p-6 bg-white rounded-xl shadow-md">

          {/* Botão de Cadastrar posicionado no topo do bloco */}
          <div className="mb-6">
            <Link href={"/cadastro"}>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Cadastrar Novo Usuário</button>
            </Link>
          </div>

          {/* Mapeamento dos dados dos usuários */}
          {Array.isArray(dados) && dados.length > 0 ? (
            // Container para a lista, que adiciona um espaço entre cada usuário
            <div className="space-y-4">
              {dados.map((item) => (
                // 3. CARD DO USUÁRIO: Usamos flex-col para empilhar as informações e o botão.
                <div key={item.id} className="border p-4 rounded-md shadow-sm flex flex-col items-start">

                  {/* Informações do usuário (Nome e Email) */}
                  <div className="mb-3">
                    <h1 className="text-lg text-black"><b>Nome:</b> {item.nome}</h1>
                    <p className="text-md text-gray-600"><b>Email:</b> {item.email}</p>
                  </div>

                  {/* Botão de Editar, que agora fica corretamente abaixo */}
                  <Link href={`/editarUsuario/${item.id}`}>
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition-colors">
                      Editar
                    </button>
                  </Link>

                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Nenhum usuário cadastrado.</p>
          )}

        </div>
      </div>

      {/* Container principal que organiza o CRUD e o conteúdo da página */}
      {/* <div className="flex justify-center items-center space-y-6 h-screen">
        <Link href={"/cadastro"} ><button className="bg-blue-500 rounded-lg">Cadastrar Usuário</button></Link>
        {Array.isArray(dados) && dados.length > 0 ? (
          dados.map((item) => (
            <div key={item.id} className="border p-4 my-2 rounded-md">
              <h1 className="text-lg"><b>Nome:</b> {item.nome} | <b>Email:</b> {item.email}</h1>
              <Link href={`/editarUsuario/${item.id}`}>
                <button className="bg-yellow-500 text-white px-3 py-1 mt-2 rounded-md">Editar</button>
              </Link>
            </div>
          ))
        ) : (
          <p>Nenhum usuário cadastrado.</p>
        )} */}

      {/* Área de Conteúdo Principal (Itens da API) */}
      {/* <div className="p-4 bg-gray-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
            
            {produtos.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl shadow-md overflow-hidden p-3 flex flex-col justify-center items-center h-full">
                <div className=" flex justify-center items-center mb-3">
                  <img className="max-w-45 max-h-45" src={item.image}></img>
                </div>
                <div className="flex flex-col">
                 
                  <h1 className="text-xl text-gray-950 font-semibold mb-2">{item.title}</h1>
                  <p className="text-xs text-gray-500 mb-1">{item.category}</p>
                  <p className="text-lg font-semibold text-green-700 mb-2"><b>$:</b>{item.price}</p>
                  <p className="text-sm text-gray-700 mb-2 line-clamp-3"><b>Descrição: </b>{item.description}</p>
                </div>
                <div className="w-full h-auto">
                  <Link href={`/produtos/${item.id}`}>
                    <button className="bg-blue-500 rounded-lg text-center w-full p-2.5 text-white hover:text-gray-900 hover:shadow-gray-800 shadow-md duration-200 font-semibold font-sans cursor-pointer">Ver mais</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      {/* </div> */}
    </div>
  )
}