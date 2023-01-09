import { Header, LoginForm, Footer } from "@components";
import LoginImage from "@images/login_illustration.svg";
import Link from "next/link";
import nookies from "nookies";
import { NextPageContext } from "next";
import axios from "axios";
import { User } from "@models";
const Login = ({ user }: { user: User }) => {
    return (
        <>
            {" "}
            <div className="mt-10 desktop:pb-52 mobile:pb-24 desktop:h-screen">
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
                <div className="desktop:block mobile:hidden">
                    <LoginImage className="absolute left-20" />
                    <LoginImage className="absolute right-20" style={{ transform: `scaleX(-1)` }} />
                </div>
            </div>
            <Footer user={user} />
        </>
    );
};
export const getServerSideProps = async (ctx: NextPageContext) => {
    const cookies = nookies.get(ctx);
    let user = null;

    if (cookies?.jwt) {
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BE}/doorpathmain`, {
                headers: {
                    Cookie: `${cookies.jwt}`,
                },
            });
            user = data;
        } catch (e) {
            console.log(e);
        }
    }

    return {
        props: {
            user,
        },
    };
};
export default Login;
