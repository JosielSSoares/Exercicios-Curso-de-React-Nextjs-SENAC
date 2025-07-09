export default function MenuVertical(){
  return (
    <div className="flex space-x-4 font-mono">
        <header className= "text-white bg-blue-400 rounded-t-sm w-36 h-screen">
        <div className=" grid justify-items-start">
          <div className="p-3 hover:text-gray-400 font-bold">Menu</div>
          <div className="p-3 hover:text-gray-400">Início</div>
          <div className="p-3 hover:text-gray-400">Perfil</div>
          <div className="p-3 hover:text-gray-400">Configurações</div>
          <div className="p-3 hover:text-gray-400">Sair</div>
        </div>
      </header>

       <div className="p-3 text-black">
        <div className="font-bold pb-2">Bem-vindo!</div>
        <p className="text-xs">Esta é uma tela com um menu simples usando Tailwind CSS.</p>
       </div>

    </div>
  );
}