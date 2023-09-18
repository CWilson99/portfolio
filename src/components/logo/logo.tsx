import './logo.scss'

type Props = {
    allowHover: boolean;
}

export default function Logo({allowHover}: Props) {
    const numDivs: number = 20;

    function generateDivs() {
        let content = [];

        for (let i = 0; i < numDivs; i++) {
            content.push(<div className="side !border-b-sky-500 after:content-[''] after:text-white dark:after:text-slate-950" key={i}></div>)
        }

        return content;
    }
    return (
        <div className='dice-wrapper text-6xl group'>
            <div className={`dice` + (allowHover === true ? ' dice-hover' : '')}>
                {generateDivs()}
            </div>
            <div className={`relative opacity-80 pointer-events-none font-semibold left-1 -top-14 transition-all duration-200` + (allowHover === true ? ' group-hover:text-7xl group-hover:left-0 group-hover:-top-[120%]' : '')}>C</div>
        </div>
    )
  }
