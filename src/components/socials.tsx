import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

export default function Socials() {
    return (
      <div className="fixed left-0 bottom-0 ms-8 mb-8 p-2 rounded-full">
          <a target="_blank" href={"https://github.com/CWilson99"}><FaGithub className="cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:text-sky-500"size={28}/></a>
          <a target="_blank" href={"https://www.linkedin.com/in/connor-wilson-engineer/"}><FaLinkedinIn className="cursor-pointer mt-3 transition-all duration-500 hover:-translate-y-1 hover:text-sky-500" size={28}/></a>
          <a target="_blank" href={"mailto:connorjwilson99@hotmail.com"}><FaEnvelope className="cursor-pointer mt-3 transition-all duration-500 hover:-translate-y-1 hover:text-sky-500" size={28}/></a>
      </div>
    )
  }
