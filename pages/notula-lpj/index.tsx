import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Header, LpjSection, NotulaSection } from "@components";
import axios from "axios";

import { LPJ, Berkas } from "@models";

const NotulaLPJ: NextPage = () => {
    const [lpjData, setLpjData] = useState<LPJ[]>();
    const [lpjDataLoading, setLpjDataLoading] = useState<boolean>(true);
    const [notula, setNotula] = useState<Berkas[]>();
    const [notulaLoading, setNotulaLoading] = useState<boolean>(true);
    useEffect(() => {
        axios.get("/api/lpj").then((response) => {
            setLpjData(response.data);
            setLpjDataLoading(false);
        });
        axios.get("/api/notula").then((response) => {
            setNotula(response.data);
            setNotulaLoading(false);
        });
    }, []);
    return (
        <div className="mt-10 ">
            <div className="mx-20">
                <Header preset="h1" className="text-blue-2 text-center">
                    Notula & LPJ
                </Header>
                <LpjSection lpjData={lpjData} />
            </div>

            <NotulaSection notulaData={notula} />
        </div>
    );
};

export default NotulaLPJ;
