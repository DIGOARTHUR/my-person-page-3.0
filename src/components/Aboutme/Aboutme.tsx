
export default function Aboutme() {
    return (
        <div id="aboutme" className=" w-full  flex flex-col gap-16  ">
            <h1 className="   pt-28  text-5xl text-[#FC4C54]  ">About me <hr className=" border-[#FC4C54] mt-3 border-2 w-28" /></h1>
            <div className=" gap-12 flex  max-lg:flex-wrap justify-center ">
                <img className="  w-96  rounded-2xl" src="https://user-images.githubusercontent.com/59892368/232155822-b349e9a7-1c19-432b-8064-a73789a2303b.jpeg" />
                <div className="w-full max-lg:flex  justify-center">
                    <p className="text-xl max-w-[31rem] text-[#ccd4dd]">
                        Meu nome é <span className="text-[#ffffff]">Diego Arthur</span> e tenho <span className="text-[#ffffff]">29</span> anos.
                        <br />
                        Sou <span className="text-[#ffffff]"> programador front-end </span>, apaixonado por ensinar e por tudo que envolva tecnologia. Meu primeiro emprego foi utilizando a tecnologia SAPUI5, mas atualmente me especializo em:
                        <br />
                        <br />
                        <code className="text-[#ffffff]">HTML, CSS, JavaScript, TypeScript, TailwindCSS, ReactJS, Nodejs</code>.
                        <div className="mt-8">

                            <a href="" download target="_blank" type="application/pdf">
                                <img className=" h-11 hover:brightness-125 max-sm: w-full" src="https://user-images.githubusercontent.com/59892368/228204432-009858a8-b216-433a-b913-f746bd99f8da.svg" />
                            </a>

                        </div>
                        <br />
                        <br />
                        Quando não estou trabalhando, desenvolvo projetos pessoais ou de eventos da Rocketseat, Alura, e acompanho novidades sobre a área no Youtube.
                    </p>
                </div>

            </div>
        </div>
    )
}