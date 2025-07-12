type props = {
    titulo: string;
    email: React.ReactNode;
    botao: string;
    funcao: () => void;
}

export default function Usuarios({ titulo, email, botao, funcao }: props) {
    return (
      <div className="p-3">
        <div className="bg-white flex-1 p-5 rounded-lg shadow-xl text-start">
          <h1 className="text-1 font-bold text-gray-800 mb-4">{titulo}</h1>
          <div className="bg-gray-100 w-35 rounded-md text-gray-700 mb-3 text-left">{email}</div>
          <button className="w-35 py-1 px-6 bg-blue-500 text-white font-semibold rounded-md shadow-md" onClick={funcao}>{botao}
          </button>
        </div>
      </div>
    );
  }