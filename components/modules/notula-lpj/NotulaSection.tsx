import { BerkasCard } from "@components";
import { Header } from "@components";
import { Berkas } from "@models";
import Paper from "@images/paper-illustration.svg";
import Folder from "@images/folder-illustration.svg";
type NotulaSectionProps = {
    notulaData?: Berkas[];
};
export const NotulaSection = ({ notulaData }: NotulaSectionProps) => {
    return (
        <div
            className={`mt-52 bg-[#e0f8f4] ${
                notulaData ? (notulaData.length > 5 ? "h-full" : "h-[80vh]") : ""
            } pb-52 relative`}
        >
            <div className="pt-14">
                <div className="relative">
                    <Header preset="h2" className="text-blue-2 text-center">
                        Notula
                    </Header>
                    <Folder className="absolute top-0 left-10" />
                    <Paper className="absolute top-40 right-40" />
                </div>

                <div className="flex flex-col items-center mt-8 gap-2 relative">
                    {notulaData?.map((notula, index) => (
                        <BerkasCard
                            title={notula.nama}
                            berkasUrl={notula.url}
                            isEven={index % 2 == 0}
                            isLoading={false}
                        />
                    ))}
                </div>
                <Folder className="absolute bottom-10 right-32" style={{ transform: `scaleX(-1)` }} />
                <Paper className="absolute bottom-40  left-52 " style={{ transform: `scaleX(-1)` }} />
            </div>
        </div>
    );
};
