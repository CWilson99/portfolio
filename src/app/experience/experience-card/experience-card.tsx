import { Experience } from "@/types/experience";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type Props = {
    className: string;
    experience: Experience;
}

export default function ExperienceCard({className, experience}: Props) {

    return (
        <div className={`flex flex-row relative w-100 h-100 p-2 px-8 mb-16 group ` + className + (experience.company.companyUrl ? ' cursor-pointer' : 'cursor-default')}>
            <div className="absolute -z-[1] h-[105%] -top-[2.5%] md:h-[120%] md:-top-[10%] rounded border-sky-500 w-0 bg-slate-100/50 dark:bg-slate-950/50 left-[50%] transition-[width left] duration-300 md:group-hover:w-full md:group-hover:border group-hover:left-0">
            </div>
            <a className="flex flex-col md:flex-row w-full ps-4" href={experience.company.companyUrl} target="_blank">
                <div className="hidden md:inline w-2/12 relative">
                    <Image className={experience.company.companyLogo?.invert ? "dark:invert" : ""} src={experience.company.companyLogo.fileLocation} alt={`${experience.company.companyName} Logo`}
                    fill
                    style={{
                    objectFit: 'contain',
                    }}/>
                </div>
                <div className="w-full md:w-1/12 flex flex-row-reverse md:flex-col text-center items-center justify-end text-slate-600 dark:text-slate-300 text-sm md:justify-center">
                    <div className="md:w-full">
                        {experience.position.duration.to}
                    </div>
                    <div className="border-t-2 mx-2 w-4 md:w-0 md:flex-1 md:border-s-2 md:border-t-0 md:my-2">
                    </div>
                    <div className="md:w-full">
                        {experience.position.duration.from}
                    </div>
                </div>
                <div className="text-sm md:text-base md:w-8/12 flex flex-col">
                    <div className="text-2xl font-semibold flex flex-row items-center">{experience.company.companyName}
                    { experience.company.companyUrl ?
                        <div className="cursor-pointer transition-all duration-500 hover:text-sky-500"><FaArrowUpRightFromSquare className="ms-4" size={18}/></div>
                        : ""
                    }
                    </div>
                    <div className="text-xl text-slate-700 dark:text-slate-300">{experience.position.positionTitle}</div>
                    <div className="pt-1 flex flex-row flex-wrap">
                        {experience.position.skills.map(x => {
                        return (
                            <div key={x} className="bg-sky-500 px-2 py-1 me-2 last:me-0 font-medium rounded-full text-xs mb-2">
                                {x}
                            </div>
                        )
                    })}
                    </div>
                    <div className="pt-4">
                        {experience.position.positionDescription}
                    </div>
                </div>
            </a>
        </div>
    )
  }
