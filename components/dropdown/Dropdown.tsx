import { Disclosure } from "@headlessui/react";
import ChevronDownIcon from "@icons/ic_arrow_down.svg";
import { Header } from "@components";
import Link from "next/link";
import { useRouter } from "next/router";

type SubNavigationLink = {
    href: string;
    label: string;
};

type DropdownProps = {
    title: string;
    sub: SubNavigationLink[];
    onClick?: () => void;
};

export const Dropdown = ({ title, sub, onClick }: DropdownProps) => {
    const { route } = useRouter();
    const baseRoute = "/" + route.split("/")[1];
    return (
        <div className="w-full ">
            <div className=" bg-light-cyan  ">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full items-center justify-between py-2  px-5  text-grey focus:text-green-2  focus:font-bold  text-left  focus:bg-green-pastel ">
                                <Header preset="regular" className="">
                                    {title}
                                </Header>
                                <ChevronDownIcon
                                    className={`${open ? "rotate-180 transform" : ""} absolute right-7 `}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-9 pt-4 pb-2 flex flex-col gap-3">
                                {sub.map((s, index) => (
                                    <Link href={s.href} key={index}>
                                        <a>
                                            <div onClick={onClick}>
                                                <Header
                                                    className={`${
                                                        s.href === baseRoute ? "text-green-2 font-bold" : "text-grey"
                                                    }`}
                                                    preset="regular"
                                                >
                                                    {s.label}
                                                </Header>
                                            </div>
                                        </a>
                                    </Link>
                                ))}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};
