import type { NextPage } from "next";
import { StatusIKMDescription, CekStatusInput } from "@components";
const Home: NextPage = () => {
    return (
        <div className="mt-10 pb-16 mx-20">
            <StatusIKMDescription />
            <CekStatusInput />
        </div>
    );
};

export default Home;
