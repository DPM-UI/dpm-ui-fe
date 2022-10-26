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
                href: "/dpm-ui2022",
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
        href: "/ikm-ui",
        label: "IKM UI",
    },
    {
        href: "/agenda",
        label: "Agenda",
    },
    {
        href: "/gallery",
        label: "Gallery",
    },
    {
        href: "/sign-up",
        label: "Sign Up",
    },
]
