import { Header } from "@components";
import Link from "next/link";
import { Skeleton } from "@chakra-ui/react";
type BerkasCardProps = {
    title: string;
    berkasUrl: string;
    isEven: boolean;
    isLoading: boolean;
};

export const BerkasCard = ({ title, berkasUrl, isEven, isLoading }: BerkasCardProps) => {
    return (
        <div
            className={`h-[60px] w-1/2 rounded-lg border border-blue-2 py-2.5 px-4 ${
                isEven ? "bg-white" : "bg-green-pastel/40"
            }`}
        >
            <Skeleton isLoaded={!isLoading}>
                <div className="flex justify-between items-center mt-2">
                    <Header preset="regular" className="text-blue-2 font-bold">
                        {title}
                    </Header>
                    <Link href={berkasUrl}>
                        <a>
                            <Header preset="regular" className="text-green-1 font-bold underline">
                                Lihat berkas
                            </Header>{" "}
                        </a>
                    </Link>
                </div>
            </Skeleton>
        </div>
    );
};
