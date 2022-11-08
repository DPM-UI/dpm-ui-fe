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
    return (
        <div>
            <Formik initialValues={initalValues} validate={validate} onSubmit={() => console.log("aa")}>
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
