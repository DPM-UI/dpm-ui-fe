import { Header, Body } from "@components/typography";
import { ReactNode } from "react";
export const PagesTujuanCard = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-white  mobile:py-6  mobile:px-4 desktop:p-6 shadow-2xl desktop:w-[600px] rounded-lg mt-12 ">
            <Header preset="h2" className="text-blue-2 desktop:text-left mobile:text-center desktop:mb-0 mobile:mb-4">
                Tujuan
            </Header>
            {children}
        </div>
    );
};
