import Image from "next/image";

const Header = () => {
  return <header className="container  mx-auto text-xl flex flex-wrap md:flex-nowrap">
    <div className="bg-black text-white flex items-center w-full md:2/3">
      <Image src="/spacio_logo.jpg" alt="Spacio Logo" width={180} height={50} className="mr-5"/>
      
    </div>
  </header>;
}

export default Header;