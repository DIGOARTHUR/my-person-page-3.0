import Aboutme from "./components/Aboutme/Aboutme"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import Stacks from "./components/Stacks/Stacks"




function App() {


  return (
    <>
      <Header />
      < div className=" flex flex-col items-center justify-center m-auto max-w-[1200px] p-16 gap-32 max-sm:p-6">

        <Home />
        <Aboutme />
        <Stacks />
        <Projects />
      </div>
    </>
  )
}

export default App
