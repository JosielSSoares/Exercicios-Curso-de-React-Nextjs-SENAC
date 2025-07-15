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


{/* <button className={`p-3 rounded-lg cursor-pointer text-white`}>{titulo}</button> */ }

