import { Header } from "@components";
type IKM = {
    npm: number;
    major: string;
    isActive: boolean;
};
type ShowDataIKMProps = {
    data: IKM;
};
export const ShowDataIKM = ({ data }: ShowDataIKMProps) => {
    return (
        <div className="w-3/4 mt-4">
            <div className="bg-green-2 rounded-lg grid grid-cols-3 pl-5 text-white py-2">
                <Header preset="h4">NPM</Header>
                <Header preset="h4">Jurusan</Header>
                <Header preset="h4">Status IKM</Header>
            </div>
            <div className="bg-white rounded-lg grid grid-cols-3 pl-5 text-black-1 py-2 mt-2 border border-green-pastel">
                <Header preset="regular" className="text-green-2 font-bold">
                    {data.npm}
                </Header>
                <Header preset="regular" className="text-green-2 font-bold">
                    {data.major}
                </Header>
                <Header preset="regular" className={`${data.isActive ? "text-green-1" : "text-error"} font-bold`}>
                    {data.isActive ? "Aktif" : "Tidak Aktif"}
                </Header>
            </div>
        </div>
    );
};
