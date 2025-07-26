// type props = {
//     titulo: string;
//     children: React.ReactNode;
//     botao: string;
//     incrementar: () => void;
// }

type props = {
    titulo: string;
    children: React.ReactNode;
    botao: string;
    decrementar: () => void;
}

// export default function AreaUsuario({ titulo, children, botao, funcao }: props) {
//     return (
//         <div className="min-h-screen flex items-center justify-center p-4"> {/* Container para centralizar */}
//             <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center"> {/* Card principal */}
//                 <h1 className="text-3xl font-bold text-gray-800 mb-4">{titulo}</h1>
//                 <div className="bg-gray-200 text-black">
//                     {children}
//                 </div>
//                 <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out" onClick={funcao}>{botao}</button>
//             </div>
//         </div>
//     );
// }

// export default function AreaUsuario({ titulo, children, botao, incrementar }: props) {
//     return (
//         <div className="min-h-screen flex items-center justify-center p-4"> {/* Container para centralizar */}
//             <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center"> {/* Card principal */}
//                 <h1 className="text-3xl font-bold text-gray-800 mb-4">{titulo}</h1>
//                 <div className="bg-gray-200 text-black">
//                     {children}
//                 </div>
//                 <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out" onClick={incrementar}>{botao} Somar + 1</button>
//             </div>
//         </div>
//     );
// }

export default function AreaUsuario({ titulo, children, botao, decrementar }: props) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4"> {/* Container para centralizar */}
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center"> {/* Card principal */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{titulo}</h1>
                <div className="bg-gray-200 text-black">
                    {children}
                </div>
                <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out" onClick={decrementar}>{botao} Subtrair - 1</button>
            </div>
        </div>
    );
}

<div key={item.id} className="bg-white rounded-3xl shadow-md overflow-hidden p-4 flex flex-col h-full">
  {/* A imagem pode ficar diretamente aqui ou em um div para centralizá-la, mas não precisa ser um flex-grow principal */}
  <div className="flex justify-center items-center mb-4"> {/* Adicione mb-4 para dar um espaçamento abaixo da imagem */}
    <img className="max-h-40 object-contain" src={item.image} alt={item.title} /> {/* max-h-40 para controlar a altura da imagem e object-contain para evitar distorção */}
  </div>

  {/* Este div agora será o flex-grow principal para todo o conteúdo que deve empurrar o botão para baixo */}
  <div className="flex flex-col flex-grow">
    <p className="text-sm text-gray-800 mb-1"><b>ID:</b>{item.id}</p>
    <p className="text-xs text-gray-500 mb-1"><b>Categoria:</b>{item.category}</p>
    <h1 className="text-xl text-gray-950 font-semibold mb-2"><b>Título:</b>{item.title}</h1>
    <p className="text-lg font-bold text-green-700 mb-2"><b>Preço R$:</b>{item.price}</p>
    {/* A descrição deve ter flex-grow se você quiser que ela preencha o espaço restante e empurre o botão */}
    <p className="text-sm text-gray-700 mb-2 line-clamp-3 flex-grow"><b>Descrição:</b>{item.description}</p>

    {/* O botão (ou seu contêiner) precisa ter mt-auto para ser empurrado para o final */}
    <div className="mt-auto"> {/* Este div agirá como o empurrador */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-center w-full p-2.5">
        Ver mais
      </button>
    </div>
  </div>
</div>



