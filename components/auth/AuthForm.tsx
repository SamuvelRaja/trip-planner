interface AuthFormProps{
        mode:"login"|"signup"|"reset"
    }

export default function Authform({mode}:AuthFormProps){
    
    console.log(mode,mode==="login")
    return (<div>
            <form action="" className="flex-col">
                <div>
                    <input type="email" placeholder="Email" required className="w-full mb-6 px-4 py-2 rounded-sm border-[0.3px]  border-(--border-primary) bg-(--btn-primary) hover:bg-(--bg-secondary)" />
                </div>
                <div>
                    <input type="password" placeholder="password" className="w-full mb-6 px-4 py-2 rounded-sm border-[0.3px]  border-(--border-primary) bg-(--btn-primary) hover:bg-(--bg-secondary)" required/>
                </div>
                {mode==="signup"?
                    <div>
                        
                        <input id="confirmpass" type="password" className="w-full mb-6 px-4 py-2 rounded-sm border-[0.3px]  border-(--border-primary) bg-(--btn-primary) hover:bg-(--bg-secondary)" required/>
                    </div>:""
                }
                
                <div>
                    <button className="w-full px-4 py-2 rounded-sm border-[0.3px]  border-(--border-primary) bg-(--btn-primary) hover:bg-(--bg-secondary)">{mode}</button>
                </div>
            </form>
    </div>
    );
}