export default function MenuHorizontal(){
  return (
    <div>
      <header className="text-white bg-blue-400 rounded-t-sm">
        <div className="flex justify-start">
          <div className="p-3 hover:text-gray-400 font-bold">Início</div>
          <div className="p-3 hover:text-gray-400">Sobre</div>
          <div className="p-3 hover:text-gray-400">Contato</div>
        </div>
      </header>

      <div className="p-3 text-black">
        <div className="font-bold pb-2">Bem-vindo!</div>
        <p className="text-xs">Esta é uma tela com um menu simples usando Tailwind CSS.</p>
      </div>
      
    </div>
  );
}