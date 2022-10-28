import { useRouter } from "next/router";
import Link from "next/link";
import DPMLogo from "@images/dpm-ui-small-color.svg";
import { Header } from "@components";
import { NavLinks } from "@constants";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
export const Navbar = () => {
    const { route } = useRouter();
    const baseRoute = "/" + route.split("/")[1];

    return (
        <div className=" w-full h-20 bg-light-cyan shadow-md absolute top-0" style={{ zIndex: 9999 }}>
            <div className="desktop:ml-24 desktop:mr-20 flex  justify-between items-center mobile:mx-4 h-full">
                <Link href="/">
                    <a>
                        <DPMLogo className="scale-[.75]" />
                    </a>
                </Link>

                <div className="flex items-center gap-14">
                    {NavLinks.map(({ href, label, sub }) => (
                        <div className="flex flex-col items-center" key={label}>
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
            </div>
        </div>
    );
};
