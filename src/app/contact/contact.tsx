export default function Contact() {
    return (
        <div id="contact" className="flex flex-col items-center">
            <div className="text-5xl font-bold">Reach Out</div>
            <div className="flex text-center text-slate-700 dark:text-slate-300 pt-6 w-[35rem]">
                {`I'm always open to hearing about exciting new opportunities. If you have any questions or just want a chat, feel free to reach out and I'll do my best to get back to you!`}
            </div>
            <a className="cursor-pointer mt-8 py-3 px-8 border-2 border-sky-500 rounded text-lg font-semibold transition-all hover:-translate-y-1 hover:shadow-[0px_5px_4px_rgb(14,165,233)]" href="mailto://connorjwilson99@hotmail.com">Say hi</a>
        </div>
    )
  }
