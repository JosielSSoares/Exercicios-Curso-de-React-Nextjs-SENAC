"use client"

import MenuHorizontal from "@/componentes/MenuHorizontal";
import MenuVertical from "@/componentes/MenuVertical";
import TeladeLogin from "@/componentes/TeladeLogin";
import AreaUsuario from "@/componentes/AreaUsuario";
import { Children } from "react";
import { Component } from "react";
import Header from "@/componentes/Header";
import Card from "@/componentes/Card";
import Footer from "@/componentes/Footer";



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

  return (
    <div>

      <AreaUsuario
        titulo="Área do Usuário"
        botao="Executar Ação"
        funcao={acao}
      ><p>Bem vindo ao sistema</p>
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
      <div className="absolute inset-x-0 bottom-0">
        <Footer/>
      </div> */}

    </div>
  );
}