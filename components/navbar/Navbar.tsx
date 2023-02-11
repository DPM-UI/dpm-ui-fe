import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import DPMLogo from "@images/dpm-ui-small-color.svg";
import { Header, Dropdown } from "@components";
import { NavLinks } from "@constants";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
export const Navbar = () => {
    const { route } = useRouter();
    const baseRoute = "/" + route.split("/")[1];
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    return (
        <div className=" w-full desktop:h-20 mobile:h-12 bg-light-cyan shadow-md fixed top-0" style={{ zIndex: 10 }}>
            <div className="desktop:ml-24 desktop:mr-20 flex  justify-between items-center desktop:mx-4 mobile:mr-6 h-full  ">
                <Link href="/">
                    <a>
                        <DPMLogo className="desktop:scale-[.75] mobile:scale-[.4]" />
                    </a>
                </Link>

                <div className="flex items-center gap-14">
                    {NavLinks.map(({ href, label, sub }) => (
                        <div className="flex-col items-center desktop:flex mobile:hidden" key={label}>
                            <Header preset="regular" className="font-bold text-green-2  ">
                                {sub ? (
                                    <Menu>
                                        <MenuButton className="hover:text-green-1 transition duration-200 ease-in">
                                            {label}
                                        </MenuButton>
                                        <MenuList bg="#F5F9FA" mt="6">
                                            {sub.map(({ href, label }, index: number) => (
                                                <div key={label}>
                                                    <MenuItem>
                                                        <Link href={href}>
                                                            <a>
                                                                <div className="ml-[5px] hover:text-green-1 transition duration-200 ease-in">
                                                                    {label}
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    </MenuItem>
                                                    {index !== sub.length - 1 && (
                                                        <hr className=" border-grey/50 ml-4 mr-5 " />
                                                    )}
                                                </div>
                                            ))}
                                            {/* MenuItems are not rendered unless Menu is open */}
                                        </MenuList>
                                    </Menu>
                                ) : (
                                    <Link href={href}>
                                        <a>
                                            <div className="hover:text-green-1 transition duration-200 ease-in">
                                                {label}
                                            </div>
                                        </a>
                                    </Link>
                                )}
                            </Header>
                            {href === baseRoute && (
                                <hr className="bg-green-2 rounded-full h-0.5 border-green-2 px-9 mt-1" />
                            )}
                        </div>
                    ))}
                </div>
                <div className="desktop:hidden mobile:block ">
                    <div onClick={() => setIsNavOpen(!isNavOpen)}>
                        {isNavOpen ? (
                            <XMarkIcon className="w-7 fill-green-2 translate-x-1" />
                        ) : (
                            <Bars3Icon className="w-5 fill-green-2" />
                        )}
                    </div>
                </div>
                {isNavOpen && (
                    <div className="h-screen w-full bg-light-cyan absolute inset-0 mt-12 " style={{ zIndex: 9999999 }}>
                        <div className="mt-4 flex flex-col gap-2">
                            {NavLinks.map(({ href, label, sub }) => (
                                <>
                                    {sub ? (
                                        <Dropdown
                                            title={label}
                                            sub={sub}
                                            onClick={() => {
                                                setIsNavOpen(!isNavOpen);
                                            }}
                                        />
                                    ) : (
                                        <Link href={href}>
                                            <a>
                                                <div
                                                    className="mx-5 hover:text-green-1 transition duration-200 ease-in"
                                                    onClick={() => setIsNavOpen(!isNavOpen)}
                                                >
                                                    <Header
                                                        preset="regular"
                                                        className={`${
                                                            href === baseRoute ? "text-green-2 font-bold" : "text-grey"
                                                        }`}
                                                    >
                                                        {label}
                                                    </Header>
                                                </div>
                                            </a>
                                        </Link>
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
