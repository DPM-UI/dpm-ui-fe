import { Header, Body } from "@components/typography";
import { ReactNode } from "react";
export const PagesTujuanCard = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-white p-6 shadow-2xl w-[600px] rounded-lg mt-12 ">
            <Header preset="h2" className="text-green-1">
                Tujuan
            </Header>
            {children}
        </div>
    );
};
