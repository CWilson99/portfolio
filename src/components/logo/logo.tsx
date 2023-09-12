import './logo.scss'

export default function Logo() {
    const numDivs: number = 20;

    function generateDivs() {
        let content = [];

        for (let i = 0; i < numDivs; i++) {
            content.push(<div className="side !border-b-sky-500 after:content-[''] after:text-white dark:after:text-slate-950" key={i}></div>)
        }

        return content;
    }
    return (
        <div className='dice'>
            {generateDivs()}
            <div className='dice-text text-3xl font-semibold'>C</div>
        </div>
    )
  }
