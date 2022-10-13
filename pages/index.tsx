import type { NextPage } from "next";
import { Dummy } from "@components";

const Home: NextPage = () => {
    return (
        <div className="text-9xl">
            <Dummy />
            Hello World!
        </div>
    );
};

export default Home;
