type props = {
    titulo: string;
    children: React.ReactNode;
    botao : string;
    funcao: () => void;
}

export default function AreaUsuario({titulo, children, botao, funcao}:props) {
    
return (
    <div>
        <h1>{titulo}</h1>
        <p>{children}</p>
        <button className="rounded-md bg-gray-600" onClick={funcao}>{botao}</button>
    </div>
    );
}


{/* <button className={`p-3 rounded-lg cursor-pointer text-white`}>{titulo}</button> */}
 
