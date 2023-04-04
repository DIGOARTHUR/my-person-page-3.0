import { useEffect, useState } from 'react';

export default function Header() {

    //https://www.youtube.com/watch?v=QzW03hyw_bU mark header automatizado
    // https://developer.mozilla.org/pt-BR/docs/Web/API/Window/scroll top page       
    const [scroll, setScroll] = useState('');


    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent.toString() + '%')
        console.log(scroll);
    };
    window.addEventListener("scroll", onScroll);


    return (
        <div className="fixed z-10 w-full">
            <div className="bg-[#201D30] h-24 flex  justify-center items-center gap-14 text-xl  max-md:hidden">
                <h1>Home</h1>
                <h1>About me</h1>
                <h1>Skills</h1>
                <h1>Projects</h1>

            </div>
            <div style={{ transition: 'width 0.5s linear 0s', width: `${scroll}` }} className={`h-1 absolute bg-slate-50  left-0 top-50`} />
        </div>


    )
}

