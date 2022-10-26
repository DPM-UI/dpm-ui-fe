import { Body } from "@components";
import { BUTTON_PRESETS } from "./Button.preset";
type ButtonProps = {
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    padding?: string;
    leftIcon?: React.SVGAttributes<SVGElement>;
    rightIcon?: React.SVGAttributes<SVGElement>;
    noBorder?: boolean;
    type: "primary" | "outlined" | "disabled";

    children?: React.ReactNode;
    [props: string]: any;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    type,
    padding,
    noBorder,
    leftIcon,
    rightIcon,

    ...props
}) => {
    return (
        <button
            className={`transition-all flex justify-center items-center gap-2 font-bold
      ${BUTTON_PRESETS[type].text} 
      ${BUTTON_PRESETS[type].border} 
      ${noBorder ? "border-0" : BUTTON_PRESETS[type].borderWidth} 
      ${BUTTON_PRESETS[type].borderColor} 
      ${BUTTON_PRESETS[type].hover} 
      ${BUTTON_PRESETS[type].color} 
      ${padding ? padding : "desktop:py-4 desktop:px-10 mobile:py-3 mobile:px-6"} 
  
      ${className}`}
            {...props}
            type="button"
            disabled={Object.keys(BUTTON_PRESETS)[0] == "disabled" ? true : false}
        >
            {leftIcon ? <>{leftIcon}</> : null}
            <Body preset="p2">{children}</Body>

            {rightIcon ? <>{rightIcon} </> : null}
        </button>
    );
};
