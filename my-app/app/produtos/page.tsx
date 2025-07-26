"use client"

import Link from "next/link";

type userProps = {

  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}

export default async function Index() {

  const resposta = await fetch("https://fakestoreapi.com/products");
  const produtos: userProps[] = await resposta.json();
  // console.log(produtos)



  // const [contador, setContador] = useState(0);
  // function Incrementar(){
  //   setContador (contador + 1);
  // }
  // function Decrementar(){
  //   setContador (contador - 1 )
  // }
  return (
    <div>
      {/* <Header/>
      <Card/>
      <div className="absolute inset-x-0 bottom-0"> */}
      {/* <NomeDeUsuário/>
      <Footer/> */}

      {/* Container principal que organiza o menu lateral e o conteúdo da página */}
      <div className="flex min-h-screen"> {/* Usamos 'min-h-screen' para garantir que o container ocupe a altura mínima da tela */}

        {/* Menu Lateral Esquerdo */}
        <header className="text-white bg-blue-600 rounded-tr-sm rounded-br-sm w-48 p-4 flex-shrink-0">
          <div className="grid justify-items-start space-y-1">
            <div className="p-3 hover:text-gray-900 font-bold w-full">Menu</div>
            <div className="p-3 hover:text-gray-900 w-full">Início</div>
            <div className="p-3 hover:text-gray-900 w-full">Perfil</div>
            <div className="p-3 hover:text-gray-900 w-full">Configurações</div>
            <div className="p-3 hover:text-gray-900 w-full">Sair</div>
          </div>
        </header>

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
                  <p className="text-sm text-gray-800 mb-1"><b>ID:</b>{item.id}</p>
                  <p className="text-xs text-gray-500 mb-1"><b>Categoria:</b>{item.category}</p>
                  <h1 className="text-xl text-gray-950 font-semibold mb-2"><b>Título:</b>{item.title}</h1>
                  <p className="text-lg font-bold text-green-700 mb-2"><b>Preço R$:</b>{item.price}</p>
                  <p className="text-sm text-gray-700 mb-2 line-clamp-3"><b>Descrição:</b>{item.description}</p>
                </div>
                <div className="mt-auto">
                  <button className="bg-blue-500 rounded-lg text-center w-full p-2.5"> <Link href={""}></Link>Ver mais</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}