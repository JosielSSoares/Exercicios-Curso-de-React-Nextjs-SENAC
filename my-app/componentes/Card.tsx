export default function Card(){
    return(
        <div>
            <div className= "text-white p-25 space-x-4 grid grid-cols-3 justify-items-center">
            
                <div className=" bg-gray-500 w-70 m-2 p-5 rounded-md">
                    <h1 className="font-bold text-2xl">Componente 1</h1>
                    <p>Teste de visualização 1</p>
                </div>

                <div className=" bg-gray-500 w-70 m-2 p-5 rounded-md">
                    <h1 className="font-bold text-2xl">Componente 2</h1>
                    <p>Teste de visualização 2</p>
                </div>

                <div className=" bg-gray-500 w-70 m-2 p-5 rounded-md">
                    <h1 className="font-bold text-2xl">Componente 3</h1>
                    <p>Teste de visualização 3</p>
                </div>

            </div>
        </div>
    );
}