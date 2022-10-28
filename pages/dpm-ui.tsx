import type { NextPage } from "next";
import { AboutDPM, NilaiDPM, FungsiDPM } from "@components";
const DPMUI: NextPage = () => {
    return (
        <div className="flex flex-col gap-12 items-center mt-8 mx-20">
            <AboutDPM />
            <NilaiDPM />
            <FungsiDPM />
        </div>
    );
};

export default DPMUI;
