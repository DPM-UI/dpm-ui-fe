import type { NextPage } from "next";
import { AnggotaShowcase } from "@components/modules";
import { PENGURUS_INTI } from "@constants";
import { Header } from "@components/typography";
const PengurusInti: NextPage = () => {
    return (
        <div className="mt-10 pb-52">
            <Header preset="h1" className="text-green-2 text-center">
                Pengurus Inti
            </Header>
            <div className="flex flex-col gap-60 mt-32 mb-10 mx-20">
                {PENGURUS_INTI.map((pengurus, index: number) => (
                    <div className={`${index % 3 == 0 ? "" : "hidden"}`} key={index}>
                        {index % 3 == 0 && (
                            <div key={index}>
                                <AnggotaShowcase arrayAnggota={PENGURUS_INTI.slice(index, index + 3)} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PengurusInti;
