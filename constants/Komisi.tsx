import { AnggotaHukum, AnggotaKelembagaan, AnggotaPembinaan, AnggotaSuksesi } from "./komisi-member";
import { Division } from "@models";
export const KOMISI: Division[] = [
    {
        name: "Komisi Hukum",
        description:
            "Komisi hukum bertanggung jawab terhadap pembuatan & pengundangan produk legislasi DPM UI di lingkungan IKM UI, menindaklanjuti aspirasi produk hukum, merancang perbaikan produk hukum di tingkat universitas, serta mencerdaskan produk hukum kepada IKM UI. Mewakili DPM UI, komisi hukum bertanggung jawab untuk menyelesaikan sengketa antara DPM UI dan pihak terkait.",
        members: AnggotaHukum,
    },
    {
        name: "Komisi Kelembagaan",
        description:
            "Komisi Kelembagaan melakukan sinergitas & menjaring aspirasi organisasi legislatif fakultas melalui forum Legislatif United dan safari fakultas. Dalam pelaksanaan tugas wewenang Anggota DPM UI, komisi Kelembagaan bertugas menjadi koordinator Badan Kelengkapan Fakultas. Dan, berkaitan dengan UKM, komisi kelembagaan berkoordinasi dengan UKM, menjaring aspirasi UKM, serta bertanggung jawab dalam perumusan mekanisme dan pengecekkan kelayakan UKM.",
        members: AnggotaKelembagaan,
    },
    {
        name: "Komisi Suksesi",
        description:
            "Komisi Suksesi bertanggung jawab terhadap suksesi dan regenerasi LTK UI, yaitu BEM UI, DPM UI, MWA UI UM, MM dan BAK UI. Komisi ini dilimpahkan wewenang DPM UI untuk menyelenggarakan 3 jenis suksesi sebagaimana diatur dalam UUD IKM UI. Komisi Suksesi memiliki tugas menjaring aspirasi terkait PEMIRA (Pemilihan Raya) 2022 bersama litbang, merumuskan konsep dan alur hubungan penyelenggara PEMIRA serta membuat kajian terhadap pelaksanaan peraturan perundang-undangan terkait PEMIRA.",
        members: AnggotaSuksesi,
    },
    {
        name: "Komisi Pembinaan",
        description:
            "Komisi Suksesi bertanggung jawab terhadap suksesi dan regenerasi LTK UI, yaitu BEM UI, DPM UI, MWA UI UM, MM dan BAK UI. Komisi ini dilimpahkan wewenang DPM UI untuk menyelenggarakan 3 jenis suksesi sebagaimana diatur dalam UUD IKM UI. Komisi Suksesi memiliki tugas menjaring aspirasi terkait PEMIRA (Pemilihan Raya) 2022 bersama litbang, merumuskan konsep dan alur hubungan penyelenggara PEMIRA serta membuat kajian terhadap pelaksanaan peraturan perundang-undangan terkait PEMIRA.",
        members: AnggotaPembinaan,
    },
];
