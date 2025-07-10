export default function TeladeLogin(){
    return(
    <div className="space-y-6 font-mono h-screen flex justify-center items-center">
        <div className= "bg-white text-black w-80">
            
            <div className="">
                <h4 className="font-bold">Login</h4>
            </div>

            <form className="">
                <div>
                    <div className="">Email</div>
                    <input type="text"></input>
                </div>

                <div>
                    <div className="">Senha</div>
                    <input type="password"></input>
                </div>
            </form>
            
            <button>Entrar</button>
            <p>Ainda não tem conta?Cadastre-se</p>
        
        </div>
    </div>
    );
}