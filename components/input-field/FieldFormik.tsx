import { InputField } from "./index";
import type { InputFieldProps } from "./InputField";

import { useField } from "formik";

interface Identifiable {
    name: string;
}

/** Input Field using formik. See https://formik.org/ */
export const InputFieldFormik = (props: InputFieldProps & Identifiable) => {
    const [field, meta, helpers] = useField(props.name);

    return (
        <InputField
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            isError={!!meta.error}
            errorMessage={meta.error}
            className={props.className}
            {...props}
        />
    );
};
