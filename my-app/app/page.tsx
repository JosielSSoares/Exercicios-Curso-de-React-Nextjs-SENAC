

import MenuVertical from "@/componentes/MenuVertical";
import { Children, useState } from "react";
import { Component } from "react";
import Header from "@/componentes/Header";
import Card from "@/componentes/Card";
import Footer from "@/componentes/Footer";
import { useEffect } from "react";
import Link from "next/link";

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

  await new Promise(resolve => setTimeout(resolve, 2000));
  const resposta = await fetch("https://fakestoreapi.com/products");
  const produtos: userProps[] = await resposta.json();

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

      {/* Container principal que organiza o menu lateral e o conteúdo da página */}
      <div> {/* Usamos 'min-h-screen' para garantir que o container ocupe a altura mínima da tela */}

        {/* Menu Lateral Esquerdo */}
        {/* <header className="text-white bg-blue-600 rounded-tr-sm rounded-br-sm w-48 p-4 flex-shrink-0">
          <div className="grid justify-items-start space-y-1 fixed">
            <div className="p-3 hover:text-gray-900 font-bold w-full text-3xl">Menu</div>
            <div className="p-3 hover:text-gray-900 w-full font-semibold">Início</div>
            <div className="p-3 hover:text-gray-900 w-full font-semibold">Perfil</div>
            <div className="p-3 hover:text-gray-900 w-full font-semibold">Configurações</div>
            <div className="p-3 hover:text-gray-900 w-full font-semibold">Sair</div>
          </div>
        </header> */}

        {/* Área de Conteúdo Principal (Itens da API) */}
        <div className="p-4 bg-gray-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
            {/* O loop 'produtos.map' deve envolver este bloco */}
            {produtos.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl shadow-md overflow-hidden p-4 flex flex-col flex-grow h-full">
                <div className=" flex justify-center items-center mb-3">
                  <img className="h-100" src={item.image}></img>
                </div>
                <div className="flex flex-col flex-grow">
                  {/* <p className="text-sm text-gray-800 mb-1">{item.id}</p> */}
                  <h1 className="text-xl text-gray-950 font-semibold mb-2">{item.title}</h1>
                  <p className="text-xs text-gray-500 mb-1">{item.category}</p>
                  <p className="text-lg font-semibold text-green-700 mb-2"><b>$:</b>{item.price}</p>
                  <p className="text-sm text-gray-700 mb-2 line-clamp-3"><b>Descrição: </b>{item.description}</p>
                </div>
                <div className="mt-auto">
                  <Link href={`/produtos/${item.id}`}>
                    <button className="bg-blue-500 rounded-lg text-center w-full p-2.5 text-white hover:text-gray-900 hover:shadow-gray-800 shadow-md duration-200 font-semibold font-sans cursor-pointer">Ver mais</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}