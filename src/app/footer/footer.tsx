import Socials from "@/components/socials";

export default function Footer(){
    return (
        <div className=' mt-16 mb-4'>
            <div className='flex flex-col items-center text-slate-600 dark:text-slate-300 text-sm'>
                <div className="md:hidden"><Socials></Socials></div>
             Designed & Built by Connor Wilson.
            </div>
        </div>
    )
}