import { Header, Toast, InputFieldFormik, Button } from "@components";
import IKMImage from "@images/ikm_ui_illustration.svg";
import { User } from "@models";
import axios from "axios";

import { Form, Formik, FormikErrors } from "formik";
export const StatusIKMDescription = ({ user, jwt }: { user: User; jwt: string }) => {
    const initalValues = {
        link: "",
    };
    const validate = (values: { link: string }) => {
        let errors: FormikErrors<any> = {};
        if (!values.link) {
            errors.link = "Masukkan NPM anda";
        }
    };
    const handlerSubmit = (values: { link: string }) => {
        axios
            .post(`/api/ikm-ui/update`, {
                id: values.link.match(/\/d\/(.+)\//)?.[1],
                jwt: jwt,
            })
            .then((response) => successToast())
            .catch((e) => errorToast());
    };
    const errorToast = Toast({
        preset: "error",
        message: "Link Tidak Dapat Ditemukan",
    });
    const successToast = Toast({
        preset: "success",
        message: "Status IKM Berhasil Ditambahkan",
    });
    return user ? (
        <div className="mt-10  pb-20">
            <Header preset="h1" className="text-blue-2">
                Update Status IKM UI
            </Header>

            <Formik initialValues={initalValues} validate={validate} onSubmit={handlerSubmit}>
                {(props: any) => (
                    <Form className=" flex items-center mt-4 ">
                        <div className="flex flex-col gap-2 w-1/3 relative">
                            <InputFieldFormik
                                type="text"
                                name="link"
                                placeholder="Masukkan link"
                                label="Link Google Drive"
                                required={true}
                                classNameLabel="font-bold text-grey-dark"
                                className=""
                            />
                            <Button preset="primary" className="mt-8 absolute -right-24" padding="py-1.5 px-4">
                                Submit
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    ) : (
        <div>
            <Header preset="h1" className="text-blue-2">
                Status IKM UI
            </Header>
            <div className="flex mt-4">
                <div className="w-[70%] text-justify">
                    <Header preset="regular" className="text-grey-dark">
                        Informasi tentang Status iKM UI. Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Header>
                    <Header preset="regular" className="text-grey-dark mt-10">
                        Informasi tentang Status iKM UI. Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Header>
                </div>
                <IKMImage />
            </div>
        </div>
    );
};
