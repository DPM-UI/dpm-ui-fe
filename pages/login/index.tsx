import type { NextPage } from "next";
import { Header, LoginForm } from "@components";
import LoginImage from "@images/login_illustration.svg";
import Link from "next/link";
const Login: NextPage = () => {
    return (
        <div className="mt-10 pb-52 h-screen">
            <Header preset="h2" className="text-center text-green-2">
                Selamat Datang Kembali!
            </Header>
            <div className="mt-8">
                <LoginForm />
                <Header preset="h4" className="text-center mt-4 text-grey">
                    Tidak punya akun?{" "}
                    <span className="underline text-green-2 underline-offset-2">
                        <Link href="/signup">
                            <a> Sign up</a>
                        </Link>
                    </span>
                </Header>
            </div>
            <LoginImage className="absolute left-20" />
            <LoginImage className="absolute right-20" style={{ transform: `scaleX(-1)` }} />
        </div>
    );
};

export default Login;
