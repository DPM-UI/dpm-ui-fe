import { InputFieldFormik, Button } from "@components";
import { Form, Formik, FormikErrors, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
type SignUpFormModel = {
    username: string;
    password: string;
    confirmPassword: string;
};
export const SignUpForm = () => {
    const { reload } = useRouter();
    const register = async (username: string, password: string) => {
        try {
            await axios.post("/api/auth/register", {
                email: username,
                password: password,
            });
            reload();
        } catch (e: any) {
            console.log(e.response.data);
        }
    };
    const initalValues: SignUpFormModel = {
        username: "",
        password: "",
        confirmPassword: "",
    };
    const validate = (values: SignUpFormModel) => {
        let errors: FormikErrors<SignUpFormModel> = {};
        if (!values.username) {
            errors.username = "The username field is required";
        }
        if (!values.password) {
            errors.password = "The password field is required";
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "The confirm password field is required";
        } else if (values.password != values.confirmPassword) {
            errors.confirmPassword = "Please make sure your password match.";
        }
        return errors;
    };
    const handleSubmit = async (values: SignUpFormModel, helpers: FormikHelpers<SignUpFormModel>) => {
        register(values.username, values.password);
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
                        <InputFieldFormik
                            type="password"
                            name="confirmPassword"
                            label="Retype new password"
                            isDisabled={false}
                            required={true}
                            className="mt-2"
                        />
                        <Button type="submit" preset="primary" className="mx-auto mt-4" disabled>
                            {props.isSubmitting ? "Creating..." : "Create Account"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
