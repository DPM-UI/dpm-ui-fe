import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import { Form, Formik, FormikErrors } from "formik";
import { InputFieldFormik, Header, Button, Toast } from "@components";
import axios from "axios";

type LpjModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    productTitle: string;
    isAdd: boolean;
    jwt: string;
    successMessage: string;
    target: string;
    id?: number;
};

export const LpjModal = ({
    isOpen,
    onClose,
    title,
    productTitle,
    isAdd,
    jwt,
    successMessage,
    target,
    id,
}: LpjModalProps) => {
    const errorToast = Toast({
        preset: "error",
        message: "Terjadi Kesalahan Pada Server",
    });
    const successToast = Toast({
        preset: "success",
        message: successMessage,
    });

    const initalValues = {
        judul: "",
        link: "",
        imageUrl: "",
    };

    const validate = (values: { judul: string; link: string; imageUrl: string }) => {
        let errors: FormikErrors<any> = {};
        if (!values.judul) {
            errors.judul = "Masukkan judul!";
        }
        if (!values.link) {
            errors.link = "Masukkan link";
        }
        if (!values.imageUrl) {
            errors.imageUrl = "Masukkan image url";
        }
        return errors;
    };

    const handlerSubmit = (values: { judul: string; link: string; imageUrl: string }) => {
        if (isAdd) {
            axios
                .post(`/api/${target}/add`, {
                    name: values.judul,
                    link: values.link,
                    jwt: jwt,
                    imageUrl: values.imageUrl,
                })
                .then((res) => {
                    successToast();
                })
                .catch((err) => {
                    errorToast();
                });
        } else {
            axios
                .patch(`/api/${target}/update`, {
                    name: values.judul,
                    link: values.link,
                    jwt: jwt,
                    id: id,
                    imageUrl: values.imageUrl,
                })
                .then((res) => {
                    successToast();
                })
                .catch((err) => {
                    errorToast();
                });
        }
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
            <ModalOverlay />
            <ModalContent marginTop={20} marginX={5}>
                <ModalCloseButton />{" "}
                <ModalBody>
                    <Header preset="h4" className="text-center text-blue-2 mt-8">
                        {title}
                    </Header>
                </ModalBody>
                <Formik initialValues={initalValues} validate={validate} onSubmit={handlerSubmit}>
                    {(props: any) => (
                        <Form className="mt-2">
                            <div className="flex flex-col gap-2 mx-8">
                                <InputFieldFormik
                                    type="text"
                                    name="judul"
                                    placeholder="Masukkan judul"
                                    label={productTitle}
                                    required={true}
                                    classNameLabel="font-bold text-grey-dark"
                                />
                                <InputFieldFormik
                                    type="text"
                                    name="link"
                                    placeholder="Masukkan link"
                                    label="Link Google Drive"
                                    required={true}
                                    classNameLabel="font-bold text-grey-dark"
                                />
                                <InputFieldFormik
                                    type="text"
                                    name="imageUrl"
                                    placeholder="Masukkan image url"
                                    label="Link Gambar"
                                    required={true}
                                    classNameLabel="font-bold text-grey-dark"
                                />
                            </div>
                            <div className="flex justify-center pb-6 pt-4">
                                <Button preset="primary" onClick={onClose}>
                                    {isAdd ? "Tambahkan" : "Simpan"}
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                {/* </ModalFooter> */}
            </ModalContent>
        </Modal>
    );
};
