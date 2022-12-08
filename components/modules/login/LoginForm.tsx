import { InputFieldFormik, Button } from "@components";
import { Form, Formik, FormikErrors, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
type LoginFormModel = {
    username: string;
    password: string;
};
export const LoginForm = () => {
    const router = useRouter();
    const initalValues: LoginFormModel = {
        username: "",
        password: "",
    };
    const REQUIRED_ERROR_MSG = "Harus diisi!";
    const validate = (values: LoginFormModel) => {
        let errors: FormikErrors<LoginFormModel> = {};
        if (!values.username) {
            errors.username = "The username field is required";
        }
        if (!values.password) {
            errors.password = "The password field is required";
        }

        return errors;
    };
    const handleSubmit = async (values: LoginFormModel, helpers: FormikHelpers<LoginFormModel>) => {
        await axios
            .post("/api/auth/login", {
                username: values.username,
                password: values.password,
            })
            .then((res) => {
                router.push("/");
            })
            .catch((e) => console.log(e.response.data));
    };
    return (
        <div>
            <Formik initialValues={initalValues} validate={validate} onSubmit={handleSubmit}>
                {(props: any) => (
                    <Form className="mx-20">
                        <InputFieldFormik
                            type="text"
                            name="username"
                            label="Username"
                            isDisabled={false}
                            required={true}
                        />
                        <InputFieldFormik
                            type="password"
                            name="password"
                            label="Password"
                            isDisabled={false}
                            required={true}
                            className="mt-2"
                        />
                        <Button type="submit" preset="primary" className="mx-auto mt-4">
                            {props.isSubmitting ? "Login..." : "Login"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
