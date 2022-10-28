import { Anggota } from "@models";
import { Header } from "@components";
type AnggotaShowcaseProps = {
    arrayAnggota: Anggota[];
};

export const AnggotaShowcase = ({ arrayAnggota }: AnggotaShowcaseProps) => {
    return (
        <div>
            <div className="grid grid-cols-3 bg-gradient-to-br from-[#2C8EBF] to-green-1 h-52 relative rounded-xl">
                {arrayAnggota.map((anggota: Anggota, index: number) => (
                    <div className="flex flex-col items-center" key={index}>
                        <div className="absolute -top-[92px]"> {anggota.image}</div>
                        <div className="flex justify-center gap-2">
                            <Header preset="h3" className="text-green-2 -bottom-10 absolute flex  ">
                                {anggota.position}
                            </Header>
                            <div className="absolute -bottom-24 text-grey">
                                <Header preset="h4">{anggota.name}</Header>
                                <Header preset="regular" className="text-center">
                                    {anggota.faculty}
                                </Header>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
