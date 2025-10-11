import Image from "next/image";
import { FaUser } from 'react-icons/fa';


const Header = () => {
  return <header className="bg-darkGray ">
    <ul className="flex justify-between w-full items-center">
      <li><Image src="/spacio_logo.jpg" alt="Spacio Logo" width={100} height={50} /></li>
      <li className="mx-10 flex justify-center items-center"><FaUser className="text-4xl" /><h1 >Current User</h1></li>    
    </ul>
    
  </header>;
}

export default Header;