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
                        <div className="flex flex-col gap-2 desktop:w-1/3 relative">
                            <InputFieldFormik
                                type="text"
                                name="link"
                                placeholder="Masukkan link"
                                label="Link Google Drive"
                                required={true}
                                classNameLabel="font-bold text-grey-dark"
                                className=""
                            />
                            <Button
                                preset="primary"
                                className="desktop:mt-8 mobile:mt-9 absolute -right-24"
                                padding="py-1.5 px-4"
                            >
                                Submit
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    ) : (
        <div>
            <Header preset="h1" className="text-blue-2 desktop:text-left mobile:text-center">
                Status IKM UI
            </Header>
            <div className="flex mt-4">
                <div className="desktop:w-[70%] text-justify">
                    <Header preset="regular" className="text-grey-dark">
                        Status IKM UI merupakan status keanggotaan Ikatan Keluarga Mahasiswa Universitas Indonesia yang
                        terdiri dari anggota AKTIF dan anggota BIASA
                    </Header>
                    <Header preset="regular" className="text-grey-dark mt-10">
                        Cara mendapat status AKTIF ada di kewajiban Anggota IKM UI yang tertuang di Pasal 12 UU No. 14
                        Tahun 2016
                        <br></br>1. Menaati dan melaksanakan UUD IKM UI dan aturan-aturan lain yang berlaku di IKM UI
                        <br></br>2. Menaati dan melaksanakan Kode Etik IKM UI<br></br>3. Menjaga nama baik IKM UI
                        <br></br>4. Mengikuti Pembinaan Anggota IKM UI.
                    </Header>
                </div>
                <IKMImage className="desktop:block mobile:hidden" />
            </div>
        </div>
    );
};
