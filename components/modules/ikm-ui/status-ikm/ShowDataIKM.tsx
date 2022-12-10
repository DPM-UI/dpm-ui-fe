import { Header } from "@components";
import { DataIKM, User } from "@models";
import PencilIcon from "@icons/ic_pencil.svg";
type ShowDataIKMProps = {
    data: DataIKM;
};
export const ShowDataIKM = ({ data }: ShowDataIKMProps) => {
    return (
        <div className="w-full mt-4 animate-slide-in-back-center">
            <div className="bg-green-2 rounded-lg grid grid-cols-3 pl-5 text-white py-2">
                <Header preset="h4">NPM</Header>
                <Header preset="h4">Fakultas</Header>
                <Header preset="h4">Status IKM</Header>
            </div>
            <div className="bg-white rounded-lg grid grid-cols-3 pl-5 text-black-1 py-2 mt-2 border border-green-pastel">
                <Header preset="regular" className="text-green-2 font-bold">
                    {data.npm}
                </Header>
                <Header preset="regular" className="text-green-2 font-bold">
                    {data.fakultas}
                </Header>
                <Header
                    preset="regular"
                    className={`${data.statusIKMUI === "Aktif" ? "text-green-1" : "text-error"} font-bold`}
                >
                    {data.statusIKMUI}
                </Header>
            </div>
        </div>
    );
};
