type props = {
    titulo: string;
    children: React.ReactNode;
    botao: string;
    funcao: () => void;
}

export default function AreaUsuario({ titulo, children, botao, funcao }: props) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4"> {/* Container para centralizar */}
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center"> {/* Card principal */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{titulo}</h1>
                <div className="bg-gray-400">
                    {children}
                </div>
                <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out" onClick={funcao}>{botao}</button>
            </div>
        </div>
    );
}


{/* <button className={`p-3 rounded-lg cursor-pointer text-white`}>{titulo}</button> */ }

