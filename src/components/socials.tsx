import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

export default function Socials() {
    return (
      <div className="md:fixed md:left-0 md:bottom-0 z-10 md:ms-8 md:mb-8 p-2 rounded-full fade-up opacity-0 -translate-x-8" style={{animationDelay: "3900ms"}}>
        <div className='flex flex-row md:inline'>
          <a target="_blank" href={"https://github.com/CWilson99"}><FaGithub className="cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:text-sky-500"size={28}/></a>
          <a target="_blank" href={"https://www.linkedin.com/in/connor-wilson-engineer/"}><FaLinkedinIn className="cursor-pointer ms-3 md:ms-0 md:mt-3 transition-all duration-500 hover:-translate-y-1 hover:text-sky-500" size={28}/></a>
          <a target="_blank" href={"mailto:connorjwilson99@hotmail.com"}><FaEnvelope className="cursor-pointer ms-3 md:ms-0 md:mt-3 transition-all duration-500 hover:-translate-y-1 hover:text-sky-500" size={28}/></a>
        </div>
      </div>
    )
  }
