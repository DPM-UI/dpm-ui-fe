type HeaderProps = {
    className?: string;
    preset: "h1" | "h2" | "h3" | "h4";
    children: React.ReactNode;
};

export const Header = ({ className, preset, children }: HeaderProps) => {
    return (
        // change font later
        <h1
            className={`font-futura font-bold ${
                preset === "h1"
                    ? "desktop:text-[3rem] mobile:text-[1.5rem]"
                    : preset === "h2"
                    ? "desktop:text-[2rem] mobile:text-[1.25rem]"
                    : preset === "h3"
                    ? "desktop:text-[1.5rem] mobile:text-[1.125rem]"
                    : "desktop:text-[1.25rem] mobile:text-[1rem]"
            } ${className}`}
        >
            {children}
        </h1>
    );
};
