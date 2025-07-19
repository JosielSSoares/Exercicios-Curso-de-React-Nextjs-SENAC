"use client"

import MenuHorizontal from "@/componentes/MenuHorizontal";
import MenuVertical from "@/componentes/MenuVertical";
import TeladeLogin from "@/componentes/TeladeLogin";
import AreaUsuario from "@/componentes/AreaUsuario";
import { Children, useState } from "react";
import { Component } from "react";
import Header from "@/componentes/Header";
import Card from "@/componentes/Card";
import Footer from "@/componentes/Footer";
import nomeDeUsuário from "@/componentes/NomeDeUsuário";
import NomeDeUsuário from "@/componentes/NomeDeUsuário";
import { useEffect } from "react";

// function Componente({children}: {children: React.ReactNode}){
//   return(
//     <div>
//         {children}
//     </div>
//   )
// }

// function acao() {
//   alert("Sucesso")
// }
type userProps = {


  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}

export default async function Index() {

  // const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
  // const dados:userProps[] = await resposta.json();
  // console.log(dados)

  const resposta = await fetch("https://fakestoreapi.com/products");
  const produtos: userProps[] = await resposta.json();
  console.log(produtos)



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

          <Usuarios
          titulo="Bruno"
          email= "bruno@gmail.com"
          botao="Saiba mais"
          funcao={acao}
          ></Usuarios>

          <Usuarios
          titulo="Kevin"
          email= "Kevin@gmail.com"
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
        
      </AreaUsuario> */}
      {/* <AreaUsuario
        titulo="Área do Usuário"
        botao="Executar Ação"
        funcao={acao}
      >
          <div className="bg-red-500">
            <h1>hello world</h1>
          </div>
      </AreaUsuario>
      <AreaUsuario
        titulo="Área do Usuário"
        botao="Executar Ação"
        funcao={acao}
      >
          <div className="bg-amber-900">
            <h1>ola mundo</h1>
          </div>
      </AreaUsuario> */}

      {/* <Header/>
      <Card/>
      <div className="absolute inset-x-0 bottom-0"> */}
      {/* <NomeDeUsuário/>
      <Footer/> */}

      {/* Container principal que organiza o menu lateral e o conteúdo da página */}
      <div className="flex min-h-screen"> {/* Usamos 'min-h-screen' para garantir que o container ocupe a altura mínima da tela */}

        {/* Menu Lateral Esquerdo */}
        <header className="text-white bg-blue-500 rounded-tr-sm rounded-br-sm w-48 p-4 flex-shrink-0">
          <div className="grid justify-items-start space-y-1">
            <div className="p-3 hover:text-gray-400 font-bold w-full">Menu</div>
            <div className="p-3 hover:text-gray-400 w-full">Início</div>
            <div className="p-3 hover:text-gray-400 w-full">Perfil</div>
            <div className="p-3 hover:text-gray-400 w-full">Configurações</div>
            <div className="p-3 hover:text-gray-400 w-full">Sair</div>
          </div>
        </header>

        {/* Área de Conteúdo Principal (Itens da API) */}
        <div className="flex-grow p-4 bg-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* O loop 'produtos.map' deve envolver este bloco */}
            {produtos.map((item) => (
              <div key={item.id} className="bg-gray-300 rounded-lg shadow-md overflow-hidden p-4 flex flex-col h-full">
                <ul className="flex-grow">
                  <li>
                    <p className="text-sm text-gray-600 mb-1"><b>ID:</b>{item.id}</p>
                    <h1 className="text-xl font-semibold mb-2"><b>Título:</b>{item.title}</h1>
                    <p className="text-lg font-bold text-green-700 mb-2"><b>Preço:</b>{item.price}</p>
                    <p className="text-sm text-gray-700 mb-2 line-clamp-3"><b>Descrição:</b>{item.description}</p>
                    <p className="text-xs text-gray-500 mb-1"><b>Categoria:</b>{item.category}</p>
                    <p className="text-xs text-blue-500 truncate"><b>Imagem:</b>{item.image}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    
    </div>
)}