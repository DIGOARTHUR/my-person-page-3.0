
import Icon_React from './icons/IconReact';
import logo from './icons/typescript.svg';
import { ReactSVG } from "react-svg";
export default function Stacks() {

    return (
        <div className=" flex flex-col w-full p-20 ">
            <h1 className=" text-5xl text-[#FC4C54] mb-16 ">Stacks
                <hr className=" border-[#FC4C54] mt-3 border-2 w-28" />
            </h1>
            <div className="grid  grid-cols-7 max-w-2xl items-center   ">

                <div className="flex justify-center mt-10">
                    <img className=" h-16" src="https://user-images.githubusercontent.com/59892368/228339798-f8ecafd4-f8dd-4020-9bf6-145241c186ac.svg" />
                </div>
                <div className="flex justify-center mt-10">
                    <img className=" h-16  " src="https://user-images.githubusercontent.com/59892368/228358411-738af9be-9967-414f-aeea-0ea1b5bf6210.svg" />
                </div>
                <div className="flex justify-center mt-10">
                    <img className=" h-16 " src="https://user-images.githubusercontent.com/59892368/228358415-30f8456a-68ef-40b2-b9ed-53adcac80596.svg" />
                </div>
                <div className="flex justify-center mt-10">
                    <img className=" h-16" src="https://user-images.githubusercontent.com/59892368/228363272-ad91ad31-7487-4adf-ad25-3179dfc85df4.svg" />
                </div>
                <div className="flex justify-center mt-10">
                    <img className=" h-16" src="https://user-images.githubusercontent.com/59892368/228358407-d46807e3-83bf-4716-8c01-e0f897920c83.svg" />
                </div>
                <div className="flex justify-center mt-10">
                    <img className="h-16" src="https://user-images.githubusercontent.com/59892368/228358410-43ed9692-da11-451e-a92c-efd90629f70b.svg" />
                </div>
                <div className="flex justify-center mt-10">
                    <img className="h-16" src="https://user-images.githubusercontent.com/59892368/228358412-6a95c8c2-b469-4878-97fc-7312849473c1.svg" />
                </div>
            </div>
        </div>
    )
}