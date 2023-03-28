import { motion } from 'framer-motion'



export default function () {
    return (
        <div className=" px-16 max-w-[1100px] h-[800px] flex flex-col justify-center gap-10">

            <h1 className="text-8xl text-[#FC4C54]">@Di<span className="text-[#ffffff]">e</span>go Arthur</h1>
            <div>
                <p className="text-4xl">Front-end Developer | Apaixonado por Tecnologias.</p>
                <span className="text-4xl text-[#9894AC]">Programação... Muda o Mundo.</span>
            </div>

            <div className="flex gap-3">
                <a href="">
                    <img className="hover:brightness-125" src="https://user-images.githubusercontent.com/59892368/228202530-9f2dfd7b-401d-4f2a-bd9b-503aa11890f6.svg" />
                </a>
                <a href="">
                    <img className="hover:brightness-125" src="https://user-images.githubusercontent.com/59892368/228002429-605f6278-58f4-45ca-b715-6bf5ab3e1a7c.svg" />
                </a>
                <a href="">
                    <img className="hover:brightness-125" src="https://user-images.githubusercontent.com/59892368/228002433-98d8d8ef-6a62-4515-9c24-37300df76200.svg" />
                </a>
                <a href="">
                    <img className="hover:brightness-125" src="https://user-images.githubusercontent.com/59892368/228002434-43850171-e813-4f79-91b4-2bcae9025ac3.svg" />
                </a>
                <a className='ml-16' href="">
                    <img className="hover:brightness-125" src="https://user-images.githubusercontent.com/59892368/228204432-009858a8-b216-433a-b913-f746bd99f8da.svg" />
                </a>
            </div>

        </div>)
}