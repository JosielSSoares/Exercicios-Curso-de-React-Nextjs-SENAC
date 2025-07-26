import React from "react";

const MenuVertical = () => {
  return (
    <div>
        {/* Menu Lateral Esquerdo */}
        <header className="text-white bg-blue-600 rounded-tr-sm rounded-br-sm w-48 p-4 flex-shrink-0 h-full ">
          <div className="grid justify-items-start space-y-1 fixed">
            <div className="p-3 hover:text-gray-900 font-bold w-full text-3xl">Menu</div>
            <div className="p-3 hover:text-gray-900 w-full font-semibold">Início</div>
            <div className="p-3 hover:text-gray-900 w-full font-semibold">Perfil</div>
            <div className="p-3 hover:text-gray-900 w-full font-semibold">Configurações</div>
            <div className="p-3 hover:text-gray-900 w-full font-semibold">Sair</div>
          </div>
        </header>
    </div>
  );
}

export default MenuVertical;