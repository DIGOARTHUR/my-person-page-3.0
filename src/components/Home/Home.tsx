import { motion } from 'framer-motion'
import TypeWriter from 'typewriter-effect'


export default function Home() {
    return (
        <div className=" h-[85VH] flex flex-col justify-center gap-10 items-start  max-sm:h-[500px]">

            <h1 className=" text-5xl text-[#ec4c54] max-sm:text-5xl">@Di<span className="text-[#ffffff]">e</span>go Arthur</h1>
            <div>
                <p className="text-2xl max-sm:text-xl">Front-end Developer | Apaixonado por Tecnologias.</p>
                <span className=" flex text-2xl text-[#9894AC] max-sm:text-xl">Programação...    <TypeWriter

                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.changeDelay(30).typeString(' Muda o Mundo.').pauseFor(1000).deleteAll().typeString(' Abre a mente.').pauseFor(1000).deleteAll().typeString(' É para todos!').pauseFor(1000).deleteAll().start();
                    }}


                />
                </span>
            </div>

            <div className="flex w-full justify-start   gap-3 max-sm:gap-3 flex-wrap ">
                <div className='flex max-md: gap-6'>
                    <a href="">
                        <img className=" h-11  hover:brightness-125 max-sm:h-13" src="https://user-images.githubusercontent.com/59892368/228202530-9f2dfd7b-401d-4f2a-bd9b-503aa11890f6.svg" />
                    </a>
                    <a href="">
                        <img className=" h-11  hover:brightness-125 max-sm:h-13" src="https://user-images.githubusercontent.com/59892368/228002429-605f6278-58f4-45ca-b715-6bf5ab3e1a7c.svg" />
                    </a>
                    <a href="">
                        <img className=" h-11  hover:brightness-125 max-sm:h-13" src="https://user-images.githubusercontent.com/59892368/228002433-98d8d8ef-6a62-4515-9c24-37300df76200.svg" />
                    </a>
                    <a href="">
                        <img className=" h-11  hover:brightness-125 max-sm:h-13" src="https://user-images.githubusercontent.com/59892368/228002434-43850171-e813-4f79-91b4-2bcae9025ac3.svg" />
                    </a>

                </div>


            </div>

        </div>)
}