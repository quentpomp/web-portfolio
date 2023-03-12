import { StaticImageData } from "next/image"

type ImgData = {
    img: StaticImageData,
    alt: string
}

type LinkData = {
    url: string,
    icon: StaticImageData,
    alt: string
}

type ProjDefault = {
    id: string,
    title: string,
    img: StaticImageData
}

type ProjData = {
    title: string,
    description: string,
    imgs: ImgData[],
    date: string,
    links: LinkData[]
}

type ProjInfo = {
    makemore: ProjData
    producktiv: ProjData,
    tekkaz: ProjData
}

