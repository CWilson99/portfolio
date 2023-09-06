import { FaArrowRightLong } from 'react-icons/fa6';

export default function About() {
    const greeting: string = "Hey there, I'm"
    const name: string = "Connor Wilson."

    const titles: string = "I'm a Software Engineer & Full-Stack Developer"
    return (
      <div id="about">
        <div className="font-sans text-xl">
        {greeting}
        </div>
        <h1 className="font-sans text-6xl font-semibold">
        {name}
        </h1>
        <h1 className="font-sans text-6xl text-slate-700 dark:text-slate-300">
             {titles}
        </h1>

        <div className="pt-4 max-w-5xl">
            {`I'm a puzzle-solver at heart. Dealing with complex problems and identifying robust and efficient solutions is what I do best.`}<br/>
            {`With a background in software engineering and full-stack development, I've worked on projects ranging from monolith CRM applications to Kubernetes-based microservices.`}<br/>
            {`If you're interested in having a chat, don't hesitate to reach out!`}
            <a className='pt-4 flex flex-row items-center text-slate-700 dark:text-slate-300 italic' href="#contact">Get in touch <FaArrowRightLong className="ms-2"/></a>
        </div>
      </div>
    )
  }
