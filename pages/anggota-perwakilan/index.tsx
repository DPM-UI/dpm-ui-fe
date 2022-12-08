import type { NextPage } from "next";
import { AnggotaShowcase } from "@components/modules";
import { ANGGOTA_PERWAKILAN } from "@constants";
import { Header } from "@components/typography";
const AnggotaPerwakilan: NextPage = () => {
    return (
        <div className="mt-10 pb-52">
            <Header preset="h1" className="text-blue-2 text-center">
                Anggota Perwakilan
            </Header>
            <div className="flex flex-col gap-60 mt-32 mb-10 mx-20">
                {ANGGOTA_PERWAKILAN.map((anggota, index: number) => (
                    <div className={`${index % 3 == 0 ? "" : "hidden"}`} key={index}>
                        {index % 3 == 0 && (
                            <div key={index}>
                                <AnggotaShowcase arrayAnggota={ANGGOTA_PERWAKILAN.slice(index, index + 3)} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnggotaPerwakilan;
