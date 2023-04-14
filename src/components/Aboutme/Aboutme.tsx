
export default function Aboutme() {
    return (
        <div id="aboutme" className=" w-full  flex flex-col gap-16  ">
            <h1 className="   pt-28  text-5xl text-[#FC4C54]  ">About me <hr className=" border-[#FC4C54] mt-3 border-2 w-28" /></h1>
            <div className=" gap-12 flex  max-lg:flex-wrap justify-center ">
                <img className=" max-h-[480px] " src="https://user-images.githubusercontent.com/59892368/228212455-584bfb8a-3f70-4a1b-83ca-3e429db3bd31.png" />
                <div className="w-full max-lg:flex  justify-center">
                    <p className="text-xl max-w-[31rem]">
                        Meu nome é Diego Arthur e tenho 29 anos.
                        Sou programador Front-end, apaixonado por ensinar e por tudo que envolva tecnologia. Meu primeiro emprego foi utilizando a tecnologia SAPUI5, mas atualmente me especializo em:
                        <br />
                        <br />
                        <code>HTML5</code>,  <code>Tailwind</code>, <code>TypeScript</code> <code>ReactJS</code> e  <code>NodeJS</code>.
                        <div className="mt-8">

                            <a href="CV_Diego_SoftwareDeveloper.pdf" download target="_blank" type="application/pdf">
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