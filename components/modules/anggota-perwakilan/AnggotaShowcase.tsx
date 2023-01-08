import { Anggota } from "@models";
import { Header, DivisiFrame, DivisiSlider } from "@components";
type AnggotaShowcaseProps = {
    arrayAnggota: Anggota[];
    index: number;
};

export const AnggotaShowcase = ({ arrayAnggota, index }: AnggotaShowcaseProps) => {
    return (
        <div>
            <div className=" bg-gradient-to-br from-[#2C8EBF] to-green-1 desktop:h-52 mobile:h-36 relative rounded-xl">
                <div className="desktop:grid mobile:hidden desktop:grid-cols-3">
                    {arrayAnggota.map((anggota: Anggota, index: number) => (
                        <DivisiFrame
                            key={index}
                            image={anggota.image}
                            faculty={anggota.faculty}
                            name={anggota.name}
                            position={anggota.position}
                        />
                    ))}
                </div>
                <div className="desktop:hidden mobile:block ">
                    <DivisiSlider members={arrayAnggota} name={index.toString()} />
                </div>
            </div>
        </div>
    );
};
