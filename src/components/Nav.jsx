import { FaOpencart } from "react-icons/fa";
import logo from '../assets/logo.svg';

const Nav = () => {
  return (
    <div className="h-[80px] bg-[--dark1] flex items-center">
        <nav className='container mx-auto pl-5 pr-5 flex items-center justify-between'>
        <a href="/"><img className='w-[150px]' src={logo} alt="logo" /></a>

        <div className="flex">
            <a className='text-[--light]' href="/">Home</a>
            <a className='text-[--light] ml-10 text-xl font-bold' href="/"><FaOpencart /></a>
        </div>
    </nav>
    </div>
  )
}

export default Nav