import { Project } from "@/types/project"
import Image from "next/image"
import { FaGithub, FaUpRightFromSquare } from "react-icons/fa6"
import portfolioImage from "../../../public/theconnorwilson-thumbnail.png"
import golfBookerImage from "../../../public/golfbookerhelper-thumbnail.png"
import dmDashboardImage from "../../../public/dmdashboard-thumbnail.png"

const projects: Project[] = [
    {
        name: "theconnorwilson.com",
        description: "My portfolio website, built by yours truly. Built using Next.js and Typescript, hosted as a Static Web App in Azure Cloud.",
        url: "theconnorwilson.com",
        repo: "https://github.com/CWilson99/portfolio",
        image: portfolioImage,
        tech: ["Next.js", "TypeScript", "Tailwind", "Azure"],
        wip: false
    },
    {
        name: "Golf Booker",
        description: "An application designed to simplify the booking process of public golf courses. Uses BeautifulSoup to scrape tee times from any golf course utilising the MiClub booking software.",
        url: "theconnorwilson.com",
        repo: "https://github.com/CWilson99/golf-booker",
        image: golfBookerImage,
        tech: ["Next.js", "TypeScript", "Azure"],
        wip: true
    },
    {
        name: "DM Dashboard",
        description: "A web app designed to simplify the experience for a Dungeon Master. The dashboard displays information about all player characters, including health, armour class, stats and spell slots.",
        image: dmDashboardImage,
        tech: ["React", "Webpack", "TypeScript", "Azure"],
        wip: true
    }
]

export default function Portfolio() {
    return (
        <ul id="portfolio" className="flex flex-col self-center items-center w-[80%]">
            {
                projects.map(proj => {
                    return (
                        <li key={proj.name} className="flex flex-row relative items-center mb-24 group">
                            <div className="absolute -z-50 h-[120%] -top-[10%] w-0 bg-slate-100/50 dark:bg-slate-950/50 rounded border-sky-500 left-[50%] transition-[width left] duration-300 group-hover:w-[105%] group-hover:border group-hover:-left-10">
                            </div>
                            <div className="flex flex-row me-4">
                                <div className="flex relative items-center transition-all group-hover:scale-105">
                                    <div>
                                        <Image className={`rounded` + (proj.wip ? ' blur-[4px]' : '')} src={proj.image} alt={proj.name + ` thumbnail`} width={600} height={400}></Image>
                                    </div>
                                    { proj.wip &&
                                    <div className="absolute w-full backdrop-blur-sm py-2 text-4xl bg-slate-50/50 dark:bg-slate-950/50 flex justify-center">Work In Progress</div>
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col ps-4">
                                <div className="pb-8 text-2xl font-semibold">{proj.name}</div>
                                <div className="bg-slate-100 dark:bg-slate-950/50 z-20 p-4 w-[40rem] place-self-center">{proj.description}</div>
                                <div className="flex flex-row">
                                {proj.tech.map(t => {
                                    return (
                                        <div key={t} className="m-2 text-sky-500 font-mono text-sm">{t}</div>
                                    )
                                })}
                                </div>
                                <div className="flex flex-row">
                                    {proj.repo &&
                                        <div>
                                            <a target="_blank" href={proj.repo}><FaGithub className="m-2 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:text-sky-500"size={18}/></a>
                                        </div>
                                    }
                                    {proj.url &&
                                        <div>
                                            <a target="_blank" href={proj.url}><FaUpRightFromSquare className={"my-2 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:text-sky-500" + (!proj.repo ? ' ms-2' : '')} size={18}/></a>
                                        </div>
                                    }
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
  }
