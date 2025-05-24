interface AuthFormProps{
        mode:"login"|"signup"|"reset"
    }

export default function Authform({mode}:AuthFormProps){
    
    
    return (<div>
            <form action="" className="flex-col">
                <div>
                    <input type="email" required />
                </div>
                <div>
                    <input type="password" required/>
                </div>
                {mode==="signup"?
                    <div>
                        <label htmlFor="confirmpass"> reenter password</label>
                        <input id="confirmpass" type="password" required/>
                    </div>:""
                }
                
                
            </form>
    </div>
    );
}