import { count } from "console";
import Link from "next/link";

type userProps = {

    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    // rating: {
    //     rate: number,
    //     count: number,
    // }
}

export default async function ProdutosDetalhes({ params }: { params: { id: string } }) {
    const { id } = params;

    const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
    const produto: userProps = await resposta.json();

    return (
        <div className="p-4 bg-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
                {/* O loop 'produtos.map' deve envolver este bloco */}
                    <div key={produto.id} className="bg-white rounded-3xl shadow-md overflow-hidden p-4 flex flex-col flex-grow h-full">
                        <div className=" flex justify-center items-center mb-3">
                            <img className="h-100" src={produto.image}></img>
                        </div>
                        <div className="flex flex-col flex-grow">
                            {/* <p className="text-sm text-gray-800 mb-1">{item.id}</p> */}
                            <p className="text-xs text-gray-500 mb-1">{produto.category}</p>
                            <h1 className="text-xl text-gray-950 font-semibold mb-2">{produto.title}</h1>
                            <p className="text-lg font-semibold text-green-700 mb-2"><b>R$:</b>{produto.price}</p>
                            <p className="text-sm text-gray-700 mb-2 line-clamp-3"><b>Descrição:</b>{produto.description}</p>
                        </div>
                        <div className="mt-auto">
                            <Link href={"/produtos/"}>
                            <button className="bg-blue-500 rounded-lg text-center w-full p-2.5 text-white hover:text-gray-900 hover:shadow-gray-800 shadow-md duration-200 font-semibold font-sans cursor-pointer">Voltar</button>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}