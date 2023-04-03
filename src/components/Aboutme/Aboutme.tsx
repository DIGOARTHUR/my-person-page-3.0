export default function Aboutme() {
    return (
        <div className="  flex flex-col gap-16  p-20 ">
            <h1 className="text-5xl text-[#FC4C54]  ">About me <hr className=" border-[#FC4C54] mt-3 border-2 w-28" /></h1>
            <div className=" gap-12 flex  max-lg:flex-wrap justify-center">
                <img className=" max-h-[480px] " src="https://user-images.githubusercontent.com/59892368/228212455-584bfb8a-3f70-4a1b-83ca-3e429db3bd31.png" />
                <div>
                    <p className="text-xl">
                        Meu nome é Diego Arthur e tenho 29 anos
                        Sou programador Front-end, apaixonado por ensinar e por tudo que envolva tecnologia. Meu primeiro emprego foi utilizando a tecnologia SAPUI5, mas atualmente me especializo em:

                        HTML, JavaScript, CSS, ReactJS, TypeScript.


                        Quando não estou trabalhando, desenvolvo projetos pessoais ou de eventos da Rocketseat, Alura, e acompanho novidades sobre a área no Youtube.
                    </p>
                </div>

            </div>
        </div>
    )
}