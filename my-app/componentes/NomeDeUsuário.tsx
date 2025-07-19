import { useState } from "react";

// type props = {
//     titulo: string;
//     nome: React.ReactNode;
//     botao: string;
//     funcao: () => void;
// }

// export default function Usuarios() {
//     return (
//       <div className="p-3">
//         <div className="bg-white flex-1 p-5 rounded-lg shadow-xl text-start">
//           <h1 className="text-1 font-bold text-gray-800 mb-4">Área do Usuário</h1>
//           <div className="bg-gray-100 w-35 rounded-md text-gray-700 mb-3 text-left">
//             <input type="text" className="border border-gray-600 rounded-md placeholder-gray-500 w-73 p-1" placeholder="Digite seu nome"></input>
//           </div>
//           <button className="w-35 py-1 px-6 bg-blue-500 text-white font-semibold rounded-md shadow-md"></button>
//         </div>
//       </div>
//     );
//   }

// export default function NomeDeUsuario() {
//   const [nome, setNome] = useState("");
//   const [tarefa, setTarefa] = useState<string[]>([]);

//   function AdicionarTarefa(){

//     if(nome != "")
//       setTarefa([...tarefa,nome])
//     else {
//       alert("Digite uma tarefa para continuar");
//     }
//   }
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-xl text-start w-full max-w-md">
//         <h1 className="text-xl font-bold text-gray-800 mb-4">Área do Usuário</h1>

//         <input type="text"className="w-full border text-black border-gray-600 rounded-md p-2 placeholder-gray-500 mb-4"
//           placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
//         {/* {nome && (<p className="text-gray-700">Olá, {nome}!</p>)} */}
//         <button className="w-35 py-1 px-6 bg-blue-500 text-white font-semibold rounded-md shadow-md" onClick={AdicionarTarefa} >Adicionar Tarefa</button>
//           <div>
//             {tarefa.map((tarefa, index) =>(
//             <li key={index}>
//               {tarefa}
//             </li>
//             ))}
//           </div>
//         {/* <p className="text-gray-700" >{tarefa.map}</p> */}       
//       </div>
//     </div>
//   );
// }

export default function NomeDeUsuario() {
  const [nome, setNome] = useState("");
  const [tarefa, setTarefa] = useState<string[]>([]);

  function AdicionarTarefa(){

    if(nome != "")
      setTarefa([...tarefa,nome])
    else {
      alert("Digite uma tarefa para continuar");
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-xl text-start w-full max-w-md">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Lista de Tarefas</h1>

        <input type="text"className="w-full border text-black border-gray-600 rounded-md p-2 placeholder-gray-500 mb-4"
          placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
        <button className="w-35 flex-1 py-1 px-6 bg-blue-500 text-white font-semibold rounded-md shadow-md" onClick={AdicionarTarefa} >Adicionar Tarefa</button>
          <div>
            {tarefa.map((tarefa, index) =>(
            <li key={index}>
              {tarefa}
            </li>
            ))}
          </div>      
      </div>
    </div>
  );
}