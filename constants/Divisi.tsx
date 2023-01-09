import { AnggotaKestari, AnggotaKewirausahaan, AnggotaKominfo, AnggotaLitbang, AnggotaPSDM } from "./divisi-member";
import { Division } from "@models";
export const DIVISI: Division[] = [
    {
        name: "Divisi Kominfo",
        description:
            "Divisi ini membantu mengkoordinasikan kebutuhan desain para Komisi/ Divisi lainnya, serta membangun kreativitas pengurus dan lembaga. Selain itu, Divisi ini  juga bertugas menjalankan fungsi manajemen jaring informasi. Divisi ini diamanahkan untuk menjaga opini publik terhadap lembaga. Dan bertanggung jawab atas program kerja seputar publikasi, penjagaan relasi kepada para pemangku kepentingan, pengelolaan kanal media, dan penjagaan citra positif DPM UI.",
        members: AnggotaKominfo,
    },
    {
        name: "Divisi Litbang",
        description:
            "Divisi Penelitian dan Pengembangan memiliki fungsi dalam penjaringan aspirasi. Selain itu, Divisi Penelitian dan Pengembngan memiliki tugas dalam pembuatan kanal aspirasi, mengatur masa reses, menyusun policy brief, membuat kajian tematik, serta menjaring penilaian publik pada Lembaga Kemahasiswaan UI.",
        members: AnggotaLitbang,
    },
    {
        name: "Divisi Kewirausahaan",
        description:
            "Divisi Kewirausahaan bertanggung jawab untuk memudahkan penyelenggaraan program kerja seluruh komisi dan divisi. Secara khusus, divisi ini menjaga kestabilan pendanaan lembaga.",
        members: AnggotaKewirausahaan,
    },
    {
        name: "Divisi PSDM",
        description:
            "Divisi Pengembangan Sumber Daya Manusia (PSDM) merupakan divisi yang berfungsi untuk membangun dan menjaga hubungan harmonis antar pengurus DPM UI. Divisi Pengembangan Sumber Daya Manusia (PSDM) mempunyai 4 fungsi, yaitu pengendalian internal, kaderisasi, konsolidasi, dan pemberdayaan.",
        members: AnggotaPSDM,
    },
    {
        name: "Divisi Kestari",
        description:
            "Divisi kesekretariatan merupakan bagian administratif internal DPM. Dalam fungsi serta penugasan, kesekretariatan bertanggung jawab dalam penyatuan pusat pendataan, pembuatan klasifikasi, pengaturan kanal pengumpulan data organisasi secara umum maupun khusus, hingga pendokumentasian hasil dari pertemuan.",
        members: AnggotaKestari,
    },
];
