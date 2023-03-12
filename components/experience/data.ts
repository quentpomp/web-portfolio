import python from "../../public/images/tech/python.png"
import pandas from "../../public/images/tech/pandas.png"
import pytorch from "../../public/images/tech/pytorch.png"

import react from "../../public/images/tech/react.png"
import redux from "../../public/images/tech/redux.png"
import django from "../../public/images/tech/django.png"
import css from "../../public/images/tech/css.png"
import html from "../../public/images/tech/html.png"
import javascript from "../../public/images/tech/javascript.png"

import typescript from "../../public/images/tech/typescript.png"
import java from "../../public/images/tech/java.png"
import dynamo from "../../public/images/tech/dynamo.png"
import apigateway from "../../public/images/tech/apigateway.svg"
import lambda from "../../public/images/tech/lambda.png"
import { ExpDefault, ExpInfo } from "./experience"


export const Experiences: ExpDefault[] = [
  {
      id: "Amazon",
      company: "Amazon",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
  },
  {
      id: "Zecstra",
      company: "Zecstra",
      img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/oskvugcmecjb83xvitss"
  },
  {
      id: "GlobalIDs",
      company: "Global IDs",
      img: "https://media.licdn.com/dms/image/C560BAQG2NR2W2sGCQg/company-logo_200_200/0/1612189428207?e=2147483647&v=beta&t=W9y9gTP2nfCSjxifDvge05i3DTNSI0eYjTuvdJ8Uh4w"
  }
]

export const ExpData: ExpInfo = {
  "Amazon": {
      company: "Amazon",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
      title: "Software Development Engineer Intern",
      skills: [
        {
          img: java,
          alt: "Java"
        },
        {
          img: dynamo,
          alt: "DynamoDB"
        },
        {
          img: apigateway,
          alt: "API Gateway"
        },
        {
          img: lambda,
          alt: "Lambda"
        },
        {
          img: react,
          alt: "React.js"
        },
        {
          img: typescript,
          alt: "TypeScript"
        },
      ],
      summary: [
          "Designed,implemented, tested, and deployed an internal UI for easier database management and manipulation using React, Java, and AWS.",
          "Improved database management speed by 90%.",
          "Followed Amazon's Agile Development Cycle equivalent."
      ],
      workedFrom: "Jan. 2022 - Apr. 2022"
  },
  "Zecstra": {
      company: "Zecstra",
      img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/oskvugcmecjb83xvitss",
      title: "Software Engineer Intern",
      skills: [
        {
          img: css,
          alt: "CSS"
        },
        {
          img: html,
          alt: "HTML"
        },
        {
          img: react,
          alt: "React.js"
        },
        {
          img: redux,
          alt: "Redux"
        },
        {
          img: django,
          alt: "Django"
        },
        {
          img: javascript,
          alt: "JavaScript"
        }
      ],
      summary: [
          "Built out 20+ interactive web app pages using React, Redux, and Django.",
          "Used the microservice paradigm to implement a “micro-frontend” architecture."
      ],
      workedFrom: "May 2021 - Dec. 2021"
  },
  "GlobalIDs": {
      company: "Global IDs",
      img: "https://media.licdn.com/dms/image/C560BAQG2NR2W2sGCQg/company-logo_200_200/0/1612189428207?e=2147483647&v=beta&t=W9y9gTP2nfCSjxifDvge05i3DTNSI0eYjTuvdJ8Uh4w",
      title: "Data Scientist Intern",
      skills: [
        {
          img: python,
          alt: "Python"
        },
        {
          img: pandas,
          alt: "pandas"
        },
        {
          img: pytorch,
          alt: "PyTorch"
        }
      ],
      summary: [
          "Implemented statistical tests for data quality assurance.",
          "Leveraged clustering to detect noise across multiple columns with an 85% accuracy."
      ],
      workedFrom: "Dec. 2020 - Apr. 2021"
  }
}