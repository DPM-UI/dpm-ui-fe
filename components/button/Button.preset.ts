type ButtonStyleProps = {
    color: string;
    text: string;
    border: string;
    borderWidth: string;
    borderColor: string;
    hover: string;
};

type ButtonPresetProps = {
    [key: string]: ButtonStyleProps;
};

export const BUTTON_PRESETS: ButtonPresetProps = {
    primary: {
        border: "rounded-lg",
        borderWidth: "border-2",
        color: "bg-green-1",
        hover: "hover:bg-green-2 ",
        text: "text-white",
        borderColor: "border-green-1 hover:border-green-2",
    },
    outlined: {
        border: "rounded-lg",
        borderWidth: "border-2",
        color: "bg-white",
        hover: "mobile:hover:bg-green-1/10 desktop:hover:bg-green-1/30   hover:border-green-1",
        text: "text-green-1",
        borderColor: "border-green-1",
    },
    disabled: {
        border: "rounded-lg",
        borderWidth: "border-2",
        color: "bg-grey",
        hover: "",
        text: "text-white",
        borderColor: "border-grey",
    },
    custom: {
        border: "rounded-lg",
        borderWidth: "border-2",
        color: "",
        hover: "",
        text: "text-white",
        borderColor: "",
    },
};