import { Anggota } from "@models";
import Farhan from "@images/anggota-perwakilan/farhan.svg";
import Satrio from "@images/anggota-perwakilan/satrio_alif.svg";
import Ariq from "@images/anggota-perwakilan/ariq.svg";
import Ahmad from "@images/anggota-perwakilan/ahmad.svg";
import Mursyidah from "@images/anggota-perwakilan/mursyidah.svg";
import Rafa from "@images/anggota-perwakilan/rafa_khalila.svg";
import Randyani from "@images/anggota-perwakilan/randyani.svg";
import Gabriella from "@images/anggota-perwakilan/gabriella.svg";
import Dustin from "@images/anggota-perwakilan/dustin_bona.svg";

export const ANGGOTA_PERWAKILAN: Anggota[] = [
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
        position: "Ketua Komisi Hukum",
        name: "Ahmad Khoiridhan M.",
        faculty: "FPsi 2020",
        image: <Ahmad />,
    },
    {
        position: "Ketua Komisi Kelembagaan",
        name: "Arriq Daffanadi Putra",
        faculty: "FT 2019",
        image: <Ariq />,
    },
    {
        position: "Wakil Ketua Komisi Kelembagaan",
        name: "Mursidah Aulia",
        faculty: "Vokasi 2020",
        image: <Mursyidah />,
    },
    {
        position: "Ketua Komisi Suksesi",
        name: "Dustin Bonaventura",
        faculty: "FF 2021",
        image: <Dustin />,
    },
    {
        position: "Wakil Ketua Komisi Suksesi",
        name: "Rafa Khalila Puteri",
        faculty: "FKG 2020",
        image: <Rafa />,
    },
    {
        position: "Ketua Komisi Pembinaan",
        name: "Randyani Alitha",
        faculty: "FIB 2019",
        image: <Randyani />,
    },
    {
        position: "Wakil Ketua Komisi Pembinaan",
        name: "Gabriella Igari Tatiana",
        faculty: "FIK 2019",
        image: <Gabriella />,
    },
];
