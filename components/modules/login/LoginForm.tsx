import { InputFieldFormik, Button } from "@components";
import { Form, Formik, FormikErrors, FormikHelpers } from "formik";
type LoginFormModel = {
    username: string;
    password: string;
};
export const LoginForm = () => {
    const initalValues: LoginFormModel = {
        username: "",
        password: "",
    };
    const REQUIRED_ERROR_MSG = "Harus diisi!";
    const validate = (values: LoginFormModel) => {
        let errors: FormikErrors<LoginFormModel> = {};
        if (!values.username) {
            errors.username = REQUIRED_ERROR_MSG;
        }
        if (!values.password) {
            errors.password = REQUIRED_ERROR_MSG;
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
                        <Button type="submit" preset="primary" className="mx-auto mt-4" disabled>
                            {props.isSubmitting ? "Login..." : "Login"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
