import React from "react";
import { ExclamationTriangleIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

type ToastStyleProps = {
    color: string;
    text: string;
    border: string;
    borderWidth: string;
    borderColor: string;
    leftIcon?: React.SVGAttributes<SVGElement>;
};

type ToastPresetProps = {
    [key: string]: ToastStyleProps;
};

export const TOAST_PRESETS: ToastPresetProps = {
    error: {
        border: "rounded-lg",
        borderWidth: "border-2",
        color: "bg-error  backdrop-blur-sm",
        text: "text-white",
        borderColor: "border-error",
        leftIcon: <ExclamationTriangleIcon className="w-6 h-6" />,
    },

    success: {
        border: "rounded-lg",
        borderWidth: "border-2",
        color: "bg-success backdrop-blur-sm",
        text: "text-white",
        borderColor: "border-success",
        leftIcon: <CheckCircleIcon className="w-6 h-6" />,
    },
};
