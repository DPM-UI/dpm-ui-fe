import type { NextPage } from "next";
import { LandingHero } from "@components";

const Home: NextPage = () => {
    return (
        <div className="h-screen bg-gradient-to-br from-[#2C8EBF] to-[#38BFAF] relative">
            <div
                style={{ backgroundImage: `url("/assets/images/landing_dpm.jpg")` }}
                className="bg-cover h-full bg-center"
            ></div>
            <LandingHero />
        </div>
    );
};

export default Home;
