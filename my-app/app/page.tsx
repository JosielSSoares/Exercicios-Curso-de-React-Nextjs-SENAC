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
import Usuarios from "@/componentes/Usuarios";


// function Componente({children}: {children: React.ReactNode}){
//   return(
//     <div>
//         {children}
//     </div>
//   )
// }

function acao() {
  alert("Sucesso")
}

export default function Index() {

  const [contador, setContador] = useState(0);

  function Incrementar(){
    setContador (contador + 1);
  }

  function Decrementar(){
    setContador (contador - 1 )
  }
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

      <AreaUsuario
        titulo="Área do Usuário"
        botao=""
        decrementar={Decrementar}
      ><p>{contador}</p>
        
      </AreaUsuario>
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
      <Footer/>

    </div>
  );
}