import Link from "next/link";
interface AuthFormProps{
        mode:"Login"|"Signup"|"Reset"
    }

export default function Authform({mode}:AuthFormProps){
    
    console.log(mode,mode==="Login")
    return (<div>
            <form action="" className="flex-col">
                <div>
                    <input type="email" placeholder="Email" required className="w-full mb-6 px-4 py-2 rounded-sm border-[0.3px]  border-(--border-primary) bg-(--btn-primary) hover:bg-(--bg-secondary)" />
                </div>
                <div>
                    <input type="password" placeholder={mode==="Reset"?"New Password":"Password"}className="w-full mb-6 px-4 py-2 rounded-sm border-[0.3px]  border-(--border-primary) bg-(--btn-primary) hover:bg-(--bg-secondary)" required/>
                </div>
                {mode==="Signup"?
                    <div>
                        
                        <input id="confirmpass" type="password" placeholder="Re-enter Password" className="w-full mb-2 px-4 py-2 rounded-sm border-[0.3px]  border-(--border-primary) bg-(--btn-primary) hover:bg-(--bg-secondary)" required/>
                        <p className="text-sm mb-6 text-center text-(--text-primary)">Already have account: <Link href="/login" className="underline">Log in</Link></p>
                    </div>:(mode==="Reset")?<div>
                        <input id="confirmpass" type="password" placeholder="Re-enter new Password" className="w-full mb-6 px-4 py-2 rounded-sm border-[0.3px]  border-(--border-primary) bg-(--btn-primary) hover:bg-(--bg-secondary)" required/>
                    </div>:<p className="text-sm mb-6 text-center text-(--text-primary)">Create new account: <Link href="/signup" className="underline">Sign up</Link> </p>
                }
                
                <div>
                    <button className="w-full px-4 py-2 rounded-sm border-[0.3px]  border-(--border-primary) bg-(--bg-secondary) hover:bg-[#080606]">{mode}</button>
                </div>
            </form>
    </div>
    );
}