export type NavigationLink = {
    href: string
    label: string
    sub?: SubNavigationLink[]
}

export type SubNavigationLink = {
    href: string
    label: string


}

export const NavLinks: NavigationLink[] = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "#",
        label: "About",
        sub: [
            {
                href: "/dpm-ui",
                label: "DPM UI 2022",
            },
            {
                href: "/struktur-organisasi",
                label: "Struktur Organisasi",
            },
            {
                href: "/anggota-perwakilan",
                label: "Anggota Perwakilan",
            },
            {
                href: "/pengurus-inti",
                label: "Pengurus Inti",
            },
            {
                href: "/komisi",
                label: "Komisi DPM UI 2022",
            },
            {
                href: "/divisi",
                label: "Divisi DPM UI 2022",
            },
        ],
    },
    {
        href: "#",
        label: "IKM UI",
        sub: [
            {
                href: "/okk-ui",
                label: "OKK UI",
            },
            {
                href: "/pemira-ui",
                label: "Pemira UI",
            },
            {
                href: "/status-ikm",
                label: "Status IKM UI",
            },

            {
                href: "/produk-hukum",
                label: "Produk Hukum",
            },
            {
                href: "/notula",
                label: "Notula Publik & LPJ",
            },

        ],
    },

    {
        href: "/gallery",
        label: "Gallery",
    },
]
