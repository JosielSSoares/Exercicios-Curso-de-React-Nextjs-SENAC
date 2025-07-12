"use client"

import MenuHorizontal from "@/componentes/MenuHorizontal";
import MenuVertical from "@/componentes/MenuVertical";
import TeladeLogin from "@/componentes/TeladeLogin";
import Buttom from "@/componentes/Buttom";
import { Children } from "react";
import {Component} from "react";
import Header from "@/componentes/Header";
import Card from "@/componentes/Card";
import Footer from "@/componentes/Footer";


export default function Index() {
  return (
    <div>

      <Header/>
      <Card/>
      <div className="absolute inset-x-0 bottom-0">
        <Footer/>
      </div>
      
      
    </div>
  );
}