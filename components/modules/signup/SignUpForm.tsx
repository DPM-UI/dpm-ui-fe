import { InputFieldFormik, Button } from "@components";
import { Form, Formik, FormikErrors, FormikHelpers } from "formik";
type SignUpFormModel = {
    username: string;
    password: string;
    confirmPassword: string;
};
export const SignUpForm = () => {
    const initalValues: SignUpFormModel = {
        username: "",
        password: "",
        confirmPassword: "",
    };
    const REQUIRED_ERROR_MSG = "Harus diisi!";
    const validate = (values: SignUpFormModel) => {
        let errors: FormikErrors<SignUpFormModel> = {};
        if (!values.username) {
            errors.username = REQUIRED_ERROR_MSG;
        }
        if (!values.password) {
            errors.password = REQUIRED_ERROR_MSG;
        }
        if (values.password != values.confirmPassword) {
            errors.confirmPassword = "Password kamu tidak sama";
        }
        return errors;
    };
    return (
        <div>
            <Formik initialValues={initalValues} validate={validate} onSubmit={() => console.log("aa")}>
                {(props: any) => (
                    <Form className="mx-20">
                        <InputFieldFormik
                            type="text"
                            name="Username"
                            label="Username"
                            isDisabled={false}
                            required={true}
                        />
                        <InputFieldFormik
                            type="password"
                            name="Password"
                            label="Password"
                            isDisabled={false}
                            required={true}
                            className="mt-2"
                        />
                        <InputFieldFormik
                            type="password"
                            name="Password"
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
