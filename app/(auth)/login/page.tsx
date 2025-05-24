import Authform from "@/components/auth/AuthForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "login to app",
};
export default function LoginPage(){

return <>
<h1 className="text-center">login</h1>
<Authform mode="login"/>
</>
}