import React from "react";
import { TOAST_PRESETS } from "./Toast.presets";
import { Box, useToast } from "@chakra-ui/react";
import { Header } from "@components";
import { XIcon } from "@heroicons/react/outline";

export type ToastProps = {
    preset: "error" | "warning" | "success" | "info";
    message: React.ReactNode | string;
};

export const Toast = ({ preset, message }: ToastProps) => {
    const toast = useToast({
        position: "top",
        duration: 6000,
        render: ({ onClose }) => {
            return (
                <Box
                    className={`
          transition-all flex justify-between items-center gap-2 py-3 px-2 text-center 
          ${TOAST_PRESETS[preset].text} md:text-base text-sm font-semibold z-50
          ${TOAST_PRESETS[preset].border} 
          ${TOAST_PRESETS[preset].borderWidth} 
          ${TOAST_PRESETS[preset].borderColor}
          ${TOAST_PRESETS[preset].color}`}
                >
                    <>
                        {TOAST_PRESETS[preset].leftIcon}
                        <Header preset="regular" className="font-bold">
                            {message}
                        </Header>
                        <button onClick={onClose}>
                            <XIcon className="h-6 w-6" />
                        </button>
                    </>
                </Box>
            );
        },
    });

    return toast;
};
