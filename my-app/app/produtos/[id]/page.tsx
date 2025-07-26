import { count } from "console";

type userProps = {

    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
  }

export default async function Index(){

    const resposta = await fetch("https://fakestoreapi.com/products/1");
    const produtos: userProps[] = await resposta.json();
}