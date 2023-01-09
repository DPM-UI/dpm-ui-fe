import Link from "next/link";
import { Header } from "..";
import ArrowRight from "@icons/ic_arrow_right.svg";
import ArrowLeft from "@icons/ic_arrow_left.svg";

type NavigationProps = {
    target: string;
    url: string;
    isLeft: boolean;
};

export const Navigation = ({ target, url, isLeft }: NavigationProps) => {
    return (
        <Link href={url}>
            <a>
                <div className="flex justify-end  mt-8 gap-2 items-center">
                    {isLeft ? (
                        <>
                            <ArrowLeft />
                            <Header preset="h4" className="text-blue-1">
                                {target}
                            </Header>
                        </>
                    ) : (
                        <>
                            <Header preset="h4" className="text-blue-1">
                                {target}
                            </Header>
                            <ArrowRight />
                        </>
                    )}
                </div>
            </a>
        </Link>
    );
};
