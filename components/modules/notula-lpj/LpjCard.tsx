import { Header } from "@components";
import Link from "next/link";

type LPJCardProps = {
    nama: string;
    imageUrl: string;
    url: string;
};

export const LpjCard = ({ nama, imageUrl, url }: LPJCardProps) => {
    return (
        <div className="p-6 border border-blue-1 rounded-lg bg-white h-52">
            <div className="flex gap-4">
                <div>
                    <img src={imageUrl} className="w-64 h-[160px] rounded-[6px]" />
                </div>
                <div>
                    <Header preset="h4" className="text-blue-2">
                        {nama}
                    </Header>
                    <Link href={url}>
                        <a>
                            <Header preset="regular" className="text-green-1 font-bold underline">
                                Lihat berkas
                            </Header>{" "}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};
