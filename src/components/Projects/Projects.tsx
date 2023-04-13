
import { AiOutlineLink } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useGithubAutomatedRepos, ProjectIcon, StackIcon, IGithubRepos } from 'github-automated-repos/index';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Projects() {
    {/*useGithubAutomatedRepos hook*/ }
    const { dataReposGithub } = useGithubAutomatedRepos()
    const [repository, setRepository] = useState<IGithubRepos[]>([])
    const [widthView, setWidthView] = useState(0)



    useEffect(() => {

        Aos.init({ duration: 2000 })


    }, []);
    console.log(widthView)
    useEffect(() => {

        {/*Put here your github Name*/ }
        fetch('https://api.github.com/users/digoarthur/repos')
            .then(response => response.json())
            .then(data => setRepository(dataReposGithub(data, 'deploy'))); {/*<-- keyWord*/ }
    }, [])

    return (
        <div className="flex flex-col   w-full ">
            <h1 className=" text-5xl text-[#FC4C54]  mb-16">Projects<hr className=" border-[#FC4C54] mt-3 border-2 w-28" /></h1>
            <ul className="grid grid-cols-3 gap-16 max-md:grid-cols-2  max-sm:grid-cols-1 ">
                {repository.map((item, index) => {

                    return (
                        <a data-aos={'fade-up'} className=' h-80 w-72 relative  drop-shadow-2xl bg-[#262337] p-10 max-sm:w-full' href={item.html_url} >
                            <li className='' key={item.id}>



                                {/*html Url*/}

                                {/*Name Project*/}
                                <h1 className='text-2xl font-bold mb-4'>{item.name}</h1>


                                {/*Description*/}
                                <p className=''>{item.description.slice(0, 170) + " [...]"}</p>

                                {/*Homepage*/}
                                {
                                    item.homepage ? <a className=' flex mt-4 gap-2' href={item.homepage}>
                                        <h3 className='font-bold  '>Homepage </h3>< AiOutlineLink className='self-center' />
                                    </a> : ''
                                }


                                {/*Stacks Icon*/}
                                <div className=' flex absolute top-[-15px] right-10 '>
                                    {item.topics.map((icon) => {
                                        return (
                                            <StackIcon className=" h-8 " key={icon} iconItem={icon} />
                                        )
                                    })}
                                </div>
                            </li>
                        </a>
                    )
                })}
            </ul>
        </div >
    );

}


