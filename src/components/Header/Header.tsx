import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return <header className="container mx-auto text-xl flex flex-wrap md:flex-nowrap">
    <div className="text-black flex items-center w-full md:2/3">
      <Image src="/spacio_logo.jpg" alt="Spacio Logo" width={180} height={50} className="mr-5"/>
      <ul className="flex justify-end w-full">
        <li>
          <Link href="/about" className="px-5">Rooms</Link>
        </li>
        <li>
          <Link href="/about" className="px-5">Gallery</Link>
        </li>
        <li>
          <Link href="/about" className="px-5">Restaurant</Link>
        </li>
        <li>
          <Link href="/services" className="px-5">Location</Link>
        </li>
        <li>
          <Link href="/contact" className="px-5">Contact</Link>
        </li>
        <li>
          <Link href="/auth" className=""><FaUser className="text-2xl cursor-pointer ml-4"/></Link>
        </li>
      </ul>
    </div>
  </header>
};

export default Header;