import { ProjDefault, ProjInfo } from "./projects";

import tekkaz1 from "../../public/images/projects/tekkaz1.png"
import tekkaz2 from "../../public/images/projects/tekkaz2.png"
import tekkaz3 from "../../public/images/projects/tekkaz3.png"

import producktiv1 from "../../public/images/projects/producktiv1.png"
import producktiv2 from "../../public/images/projects/producktiv2.png"
import producktiv3 from "../../public/images/projects/producktiv3.png"

import duck from "../../public/images/misc/duck.png"
import paper from "../../public/images/misc/paper.png"
import github from "../../public/images/misc/github.png"

export const Projs: ProjDefault[] = [
    {
        id: "makemore",
        title: "MakeMore",
        img: tekkaz1
    },
    {
        id: "tekkaz",
        title: "Tekkaz",
        img: tekkaz1
    },
    {
        id: "producktiv",
        title: "Producktiv",
        img: producktiv1
    }
]

export const ProjData: ProjInfo = {
    "makemore": {
        title: "MakeMore: Multi-Layer Perceptron \"Thing\" Generator",
        description: "A generalized machine learning algorithm, that, given a list of anything, will generate more of those things. At a high level, MakeMore predicts what the next character will be, based on the previous n characters. Implementation based on Google's WaveNet Paper, and is a precursor to the generative pre-trained transformer (GPT) model. Written in Python with PyTorch.",
        imgs: [],
        date: "Feb. 2023",
        links: [
            {
                url: "https://arxiv.org/pdf/1609.03499.pdf",
                icon: paper,
                alt: "wavenet"
            },
            {
                url: "https://github.com/quentpomp/MLP-Thing-Generator",
                icon: github,
                alt: "github repo"
            }
        ]
    },
    "producktiv": {
        title: "Producktiv: A Productivity Social Media",
        description: "A social media app where users can track and share their productivity metrics, goals, and achievements. Users can start a streak or create a to-do, see what their friends are up to, and get profile badges for keeping up with their to-dos and streaks. Built with SwiftUI and Firebase.",
        imgs: [
            {
                img: producktiv1,
                alt: "productktiv main"
            },
            {
                img: producktiv2,
                alt: "producktiv alt1"
            },            {
                img: producktiv3,
                alt: "producktiv alt2"
            }
        ],
        date: "Jan. 2023",
        links: [
            {
                url: "https://testflight.apple.com/join/h52wY2NU",
                icon: duck,
                alt: "producktiv logo"
            },
            
        ]
    },
    "tekkaz": {
        title: "Tekkaz: Fantasy Premier League",
        description: "A fantasy soccer app with a unique gameplay experience. Instead of the traditional points system in existing fantasy sports, Tekkaz uses points not only to determine league standing, but also as the currency for the league. Users can use their points to sign new players, trade with other users, or use as point multipliers. Built with React-Native and Firebase.",
        imgs: [
            {
                img: tekkaz1,
                alt: "tekkaz main"
            },
            {
                img: tekkaz2,
                alt: "tekkaz alt1"
            },            {
                img: tekkaz3,
                alt: "tekkaz alt2"
            }
        ],
        date: "Jun. 2022 – Aug. 2022",
        links: []
    }
}