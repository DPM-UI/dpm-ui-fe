import { Body } from "@components";
import { BUTTON_PRESETS } from "./Button.preset";
type ButtonProps = {
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    padding?: string;
    leftIcon?: React.SVGAttributes<SVGElement>;
    rightIcon?: React.SVGAttributes<SVGElement>;
    noBorder?: boolean;
    preset: "primary" | "outlined" | "disabled" | "custom";

    children?: React.ReactNode;
    [props: string]: any;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    preset,
    padding,
    noBorder,
    leftIcon,
    rightIcon,
    ...props
}) => {
    return (
        <button
            className={`transition-all flex justify-center items-center gap-2 font-bold
   
      ${BUTTON_PRESETS[preset].text} 
      ${BUTTON_PRESETS[preset].border} 
      ${noBorder ? "border-0" : BUTTON_PRESETS[preset].borderWidth} 
      ${BUTTON_PRESETS[preset].borderColor} 
      ${BUTTON_PRESETS[preset].hover} 
      ${BUTTON_PRESETS[preset].color} 
      ${padding ? padding : "desktop:py-4 desktop:px-10 mobile:py-3 mobile:px-6"} 
  
      ${className}`}
            {...props}
            disabled={Object.keys(BUTTON_PRESETS)[0] == "disabled" ? true : false}
        >
            {leftIcon ? <>{leftIcon}</> : null}
            <Body preset="p2">{children}</Body>

            {rightIcon ? <>{rightIcon} </> : null}
        </button>
    );
};
