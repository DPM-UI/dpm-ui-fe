import type { NextPage } from "next";
import { Header, SignUpForm } from "@components";
import SignUpImage from "@images/signup_illustration.svg";
const SignUp: NextPage = () => {
    return (
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
    );
};

export default SignUp;
