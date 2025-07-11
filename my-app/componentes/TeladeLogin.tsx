export default function TeladeLogin(){
    return(
    <div className="space-y-6 font-mono h-screen flex justify-center items-center">
        <div className= "bg-gray-900 text-white w-90 p-8 rounded-lg">
            
            <div className="flex items-center justify-center pb-3">
                <h1 className="font-bold text-2xl">LOGIN</h1>
            </div>

            <form className="font-sans">
                <div>
                    <div className="pb-1">E-mail</div>
                    <input type="text" className="border border-gray-600 rounded-md placeholder-gray-500 w-73 p-1" placeholder="Digite seu e-mail"></input>
                </div>

                <div className="pt-5">
                    <div className="pb-1">Senha</div>
                    <input type="password" className="border border-gray-600 rounded-md placeholder-gray-500 w-73 p-1" placeholder="Digite sua senha"></input>
                </div>
            </form>
            
            <div className="flex items-center justify-center pt-5">
                <button className="rounded-full font-bold bg-green-800 hover:bg-green-900 text-white px-30 h-8">Entrar</button>
            </div>
            <div className="pt-1.5">
                <p className="text-sm flex items-center justify-center">Ainda não tem conta?<a className="text-green-800 font-bold ml-1.5" target="_blank" href="https://www.instagram.com/p/DFFbU4yOcp8/?img_index=2">Cadastre-se</a></p>
            </div>
        </div>
    </div>
    );
}