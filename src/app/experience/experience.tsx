import { Experience } from "@/types/experience"
import ExperienceCard from "./experience-card/experience-card"

const previousExperience: Experience[] = [
  {
    company: {
      companyName: "Servian",
      companyLogo: {
        invert: true,
        fileLocation: "/servian-logo.svg"
      },
      companyUrl: 'https://www.servian.com/'
    },
    position: {
      duration: {
        from: "Feb 2022",
        to: "Current"
      },
      positionTitle: "Consultant",
      positionDescription: "Currently working as a versatile Consultant at Servian with a strong focus on architecting and implementing complex solutions across various domains. My consulting experience encompasses full-stack development, DevOps, and data pipeline work. I excel in building cloud-based solutions on AWS, utilizing containerization and Kubernetes (EKS) for scalability. Working within high-security environments, including collaborations with the Queensland Police Service, has honed my ability to adapt to diverse challenges.",
      skills: ["Typescript", "Angular", "React", "Python", "Flask", "DevOps", "Kubernetes", "Graph Databases"]
    }
  },
  {
    company: {
      companyName: "Tour Amigo",
      companyLogo: {
        invert: false,
        fileLocation: "/tour-amigo-logo.svg"
      },
      companyUrl: "https://touramigo.com/"
    },
    position: {
      duration: {
        from: "Jan",
        to: "Nov 2021"
      },
      positionTitle: "Software Developer",
      positionDescription: "I spearheaded the development of a robust back-end reporting system, transforming data from a Software as a Service (SaaS) platform into insightful visual representations. Working in tandem with a team comprising four interns and seasoned professionals, I played a pivotal role in constructing a crucial module within a larger SaaS ecosystem. One of my notable achievements was the design and implementation of a dynamic visual SQL query builder, capable of seamlessly interacting with any SQLAlchemy model.",
      skills: ["Python", "Javascript", "SQLAlchemy"]
    }
  },
  {
    company: {
      companyName: "Dropship Central",
      companyLogo: {
        invert: false,
        fileLocation: "/dropship-logo.svg",
      },
    },
    position: {
      duration: {
        from: "July 2019",
        to: "Jan 2022"
      },
      positionTitle: "Software Developer",
      positionDescription: "In collaboration with company directors, I played a pivotal role in architecting and developing a tailored ERP system specifically designed for the IT retail sector. My focus was on creating efficient, high-performance code aimed at enhancing business productivity and steering away from legacy systems. I successfully managed vast volumes of product records, necessitating frequent updates across multiple database tables. My contributions extended beyond ERP development, with over 1200+ commits across diverse projects within Dropship Central.",
      skills: ["C#", ".NET"]
    }
  }
]

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col w-full md:w-[80%] self-center">
        {previousExperience.map(x => {
          return (
            <ExperienceCard className="mb-8 md:mb-16 last:mb-0" key={x.company.companyName} experience={x}></ExperienceCard>
          )
        })}
    </div>
  )
}
