import { Header, InputFieldFormik, SelectFieldFormik, Button, ShowDataIKM, Toast } from "@components";
import { Form, Formik, FormikErrors } from "formik";
import { useState } from "react";
import { DataIKM, User } from "@models";
import { Skeleton } from "@chakra-ui/react";
import axios from "axios";
export const CekStatusInput = () => {
    const [dataIkm, setDataIkm] = useState<DataIKM>();
    const [dataIkmLoading, setDataIKMLoading] = useState<boolean>(true);
    const initalValues = {
        npm: "",
        faculty: "",
    };

    const errorToast = Toast({
        preset: "error",
        message: "Status IKM tidak ditemukan",
    });

    const FACULTY_OPTIONS = [
        { label: "Kedokteran", value: "FK" },
        { label: "Kedokteran Gigi", value: "FKG" },
        { label: "Ilmu Keperawatan", value: "FIK" },
        { label: "Farmasi", value: "FF" },
        {
            label: "Matematika dan Ilmu Pengetahuan Alam",
            value: "FMIPA",
        },
        { label: "Teknik", value: "FT" },
        { label: "Psikologi", value: "FPsi" },
        { label: "Hukum", value: "FH" },
        { label: "Ekonomi dan Bisnis", value: "FEB" },
        { label: "Ilmu Pengetahuan Budaya", value: "FIB" },
        { label: "Ilmu Komputer", value: "Fasilkom" },
        { label: "Ilmu Administrasi", value: "FIA" },
        { label: "Ilmu Sosial dan Politik", value: "FISIP" },
        { label: "Kesehatan Masyarakat", value: "FKM" },
        { label: "Program Pendidikan Vokasi", value: "Vokasi" },
        { label: "Sekolah Kajian Stratejik dan Global", value: "SKSG" },
        { label: "Sekolah Ilmu Lingkungan", value: "SIL" },
    ];
    const validate = (values: { npm: string; faculty: string }) => {
        let errors: FormikErrors<any> = {};
        if (!values.npm) {
            errors.npm = "Masukkan NPM anda";
        }
        if (!values.faculty) {
            errors.faculty = "Pilih Fakultas anda";
        }
        return errors;
    };

    const handlerSubmit = (values: { npm: string; faculty: string }) => {
        const data = {
            npm: parseInt(values.npm),
            faculty: values.faculty,
        };

        axios
            .get(`/api/ikm-ui/${data.npm}/${data.faculty}`)
            .then((response) => {
                setDataIkm(response.data);
                setDataIKMLoading(false);
            })
            // TODO: create handler error

            .catch((error) => errorToast());
    };

    return (
        <div>
            <div className="mt-4">
                <Header preset="h2" className="text-blue-2 ">
                    Cek Status IKM
                </Header>
            </div>
            <div>
                <Formik initialValues={initalValues} validate={validate} onSubmit={handlerSubmit}>
                    {(props: any) => (
                        <Form className="mt-4">
                            <div className="flex flex-col gap-2 w-1/3">
                                <InputFieldFormik
                                    type="number"
                                    name="npm"
                                    placeholder="Tulis NPM"
                                    label="NPM"
                                    required={true}
                                    classNameLabel="font-bold text-grey-dark"
                                />
                                <SelectFieldFormik
                                    name="faculty"
                                    placeholder="Pilih Fakultas"
                                    options={FACULTY_OPTIONS}
                                    label="Fakultas"
                                    required={true}
                                    classNameLabel="font-bold text-grey-dark"
                                />
                            </div>
                            <Button preset="primary" className="mt-4">
                                Cek Status
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>

            {dataIkm ? (
                <Skeleton isLoaded={!dataIkmLoading} className="w-3/4 h-20" rounded="lg">
                    <ShowDataIKM data={dataIkm} />
                </Skeleton>
            ) : null}
        </div>
    );
};
