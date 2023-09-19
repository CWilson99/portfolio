import { Project } from "@/types/project"
import Image from "next/image"
import { ImageLoaderProps } from "next/image"
import { FaGithub, FaUpRightFromSquare } from "react-icons/fa6"

const projects: Project[] = [
    {
        name: "theconnorwilson.com",
        description: "My portfolio website, built by yours truly. Built using Next.js and Typescript, hosted as a Static Web App in Azure Cloud.",
        url: "theconnorwilson.com",
        repo: "https://github.com/CWilson99/portfolio",
        image: "/theconnorwilson-thumbnail.png",
        tech: ["Next.js", "TypeScript", "Tailwind", "Azure"],
        wip: false
    },
    {
        name: "Golf Booker",
        description: "An application designed to simplify the booking process of public golf courses. Uses BeautifulSoup to scrape tee times from any golf course utilising the MiClub booking software.",
        url: "theconnorwilson.com",
        repo: "https://github.com/CWilson99/golf-booker",
        image: "/golfbookerhelper-thumbnail.png",
        tech: ["Next.js", "TypeScript", "Azure"],
        wip: true
    },
    {
        name: "DM Dashboard",
        description: "A web app designed to simplify the experience for a Dungeon Master. The dashboard displays information about all player characters, including health, armour class, stats and spell slots.",
        image: "dmdashboard-thumbnail.png",
        tech: ["React", "Webpack", "TypeScript", "Azure"],
        wip: true
    }
]

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    console.log(src)
    return `https://theconnorwilson.com/${src}?w=${width}&q=${quality || 75}`
  }

export default function Portfolio() {
    return (
        <ul id="portfolio" className="flex flex-col self-center items-center w-[90%] md:w-[80%]">
            {
                projects.map(proj => {
                    return (
                        <li key={proj.name} className="flex flex-row relative items-center mb-8 md:mb-24 group m-2 w-full">
                            <div className="absolute -z-[8] h-[120%] -top-[10%] w-0 md:bg-slate-100/50 md:dark:bg-slate-950/50 rounded border-sky-500 left-[50%] transition-[width left] duration-300 group-hover:w-[105%] md:group-hover:border group-hover:-left-10">
                            </div>
                            <div className="flex flex-row me-4 hidden md:inline">
                                <div className="flex relative items-center transition-all group-hover:scale-105">
                                    <div>
                                        <Image loader={imageLoader} className={`rounded` + (proj.wip ? ' blur-[4px]' : '')} src={proj.image} alt={proj.name + ` thumbnail`} width={600} height={400}></Image>
                                    </div>
                                    { proj.wip &&
                                    <div className="absolute w-full backdrop-blur-sm py-2 text-4xl bg-slate-50/50 dark:bg-slate-950/50 flex justify-center">Work In Progress</div>
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col ps-4 p-8 bg-slate-100 dark:bg-slate-950/50 md:bg-transparent md:dark:bg-transparent w-full rounded">
                                <div className="px-4 pb-4 md:px-0 md:pb-8 text-2xl font-semibold">{proj.name}</div>
                                <div className="md:bg-slate-100 md:dark:bg-slate-950/50 z-[1] p-4 w-full md:w-[40rem] place-self-center">{proj.description}</div>
                                <div className="flex flex-row flex-wrap px-4 md:px-0">
                                {proj.tech.map(t => {
                                    return (
                                        <div key={t} className="md:my-2 me-2 text-sky-500 font-mono text-sm">{t}</div>
                                    )
                                })}
                                </div>
                                <div className="flex flex-row mt-2 md:m-0 px-4 md:px-0">
                                    {proj.repo &&
                                        <div>
                                            <a target="_blank" href={proj.repo}><FaGithub className="my-2 me-4 md:me-2 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:text-sky-500 scale-125 md:scale-100" size={18}/></a>
                                        </div>
                                    }
                                    {proj.url &&
                                        <div>
                                            <a target="_blank" href={proj.url}><FaUpRightFromSquare className={"my-2 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:text-sky-500 scale-125 md:scale-100" + (!proj.repo ? ' ms-2' : '')} size={18}/></a>
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
