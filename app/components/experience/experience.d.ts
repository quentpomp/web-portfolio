import { StaticImageData } from "next/image"

type ExpDefault = {
    id: string,
    company: string,
    img: string
}

type CompanyData = {
    company: string,
    img: string,
    title: string,
    skills: ImgData[],
    summary: string[]
    workedFrom: string
}

type ExpInfo = {
    Amazon: CompanyData,
    Zecstra: CompanyData,
    GlobalIDs: CompanyData
}

type ImgData = {
    img: StaticImageData,
    alt: string
}