"use client"

import MenuHorizontal from "@/componentes/MenuHorizontal";
import MenuVertical from "@/componentes/MenuVertical";
import TeladeLogin from "@/componentes/TeladeLogin";
import Buttom from "@/componentes/Buttom";
import { Children } from "react";
import {Component} from "react";



function helloworld(){
  console.log("olá");
}


export default function Index() {
  return (
    <div>
      {/* <MenuVertical/>
      <MenuHorizontal/> */}
      {/* <TeladeLogin/> */}

      <Buttom color={"vermelho"} titulo= {"Olá mundo"} subtitulo={"Bem vindo"} funcao ={helloworld}></Buttom>
    </div>
  );
}