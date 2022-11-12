import { Header, InputFieldFormik, SelectFieldFormik, Button, ShowDataIKM } from "@components";
import { Form, Formik, FormikErrors } from "formik";
export const CekStatusInput = () => {
    const initalValues = {
        npm: "",
        faculty: "",
    };

    const FACULTY_OPTIONS = [
        { label: "Kedokteran", value: "Kedokteran" },
        { label: "Kedokteran Gigi", value: "Kedokteran Gigi" },
        { label: "Ilmu Keperawatan", value: "Ilmu Keperawatan" },
        { label: "Farmasi", value: "Farmasi" },
        {
            label: "Matematika dan Ilmu Pengetahuan Alam",
            value: "Matematika dan Ilmu Pengetahuan Alam",
        },
        { label: "Teknik", value: "Teknik" },
        { label: "Psikologi", value: "Psikologi" },
        { label: "Hukum", value: "Hukum" },
        { label: "Ekonomi dan Bisnis", value: "Ekonomi dan Bisnis" },
        { label: "Ilmu Pengetahuan Budaya", value: "Ilmu Pengetahuan Budaya" },
        { label: "Ilmu Komputer", value: "Ilmu Komputer" },
        { label: "Ilmu Administrasi", value: "Ilmu Administrasi" },
        { label: "Ilmu Sosial dan Politik", value: "Ilmu Sosial dan Politik" },
        { label: "Kesehatan Masyarakat", value: "Kesehatan Masyarakat" },
        { label: "Program Pendidikan Vokasi", value: "Program Pendidikan Vokasi" },
    ];
    const validate = (values: any) => {
        let errors: FormikErrors<any> = {};
        if (!values.npm) {
            errors.npm = "Masukkan NPM anda";
        }
        if (!values.faculty) {
            errors.faculty = "Pilih Fakultas anda";
        }
        return errors;
    };
    return (
        <div>
            <div className="mt-4">
                <Header preset="h2" className="text-green-1 ">
                    Cek Status IKM
                </Header>
            </div>
            <div>
                <Formik initialValues={initalValues} validate={validate} onSubmit={() => console.log("clicked")}>
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
            {/* later will be handled, for now using dummy */}
            <ShowDataIKM data={{ npm: 20212021, major: "Ilmu Komputer", isActive: false }} />
        </div>
    );
};
