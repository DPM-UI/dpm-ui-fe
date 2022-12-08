import { Header, SignUpForm, Footer } from "@components";
import SignUpImage from "@images/signup_illustration.svg";
import nookies from "nookies";
import { NextPageContext } from "next";
import axios from "axios";
import { User } from "@models";

const SignUp = ({ user }: { user: User }) => {
    return (
        <>
            <div className="mt-10 pb-52 h-screen">
                <Header preset="h2" className="text-center text-green-2">
                    Sign Up
                </Header>
                <div className="mt-8">
                    <SignUpForm />
                </div>
                <SignUpImage className="absolute left-20" />
                <SignUpImage className="absolute right-20" style={{ transform: `scaleX(-1)` }} />
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
export default SignUp;
