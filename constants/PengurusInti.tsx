import { Anggota } from "@models";
import Abiyan from "@images/pengurus-inti/abiyan.svg";
import Alivanza from "@images/pengurus-inti/alivanza.svg";
import Edward from "@images/pengurus-inti/edward_hamonangan.svg";
import Nabila from "@images/pengurus-inti/nabila_balqish.svg";
import Satrio from "@images/anggota-perwakilan/satrio_alif.svg";
import Farhan from "@images/anggota-perwakilan/farhan.svg";

export const PENGURUS_INTI: Anggota[] = [
    {
        position: "Ketua",
        name: "M. Farhan",
        faculty: "FEB 2019",
        image: <Farhan />,
    },
    {
        position: "Wakil Ketua",
        name: "Satrio Alif Febriyanto",
        faculty: "FH 2019",
        image: <Satrio />,
    },
    {
        position: "Sekretaris Jenderal",
        name: "Alivanza Firdaus Rhufyano",
        faculty: "FT 2020",
        image: <Alivanza />,
    },
    {
        position: "Sekretaris Jenderal",
        name: "Nabila Balqish Wijayanti",
        faculty: "Vokasi 2020",
        image: <Nabila />,
    },
    {
        position: "Controller",
        name: "Abiyan Fathan Ramadhan",
        faculty: "FEB 2020",
        image: <Abiyan />,
    },
    {
        position: "Treasurer",
        name: "Edward Xavier Hamonangan",
        faculty: "FMIPA 2020",
        image: <Edward />,
    },
];
