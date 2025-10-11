const AdminNavbar = () => {

  return (
  <nav className="bg-stone-400 h-screen w-48">
    <ul className="flex flex-col justify-around p-5 text-xl h-full">
      <li className="hover:text-white hover:underline cursor-pointer">Dashboard</li>
      <li className="hover:text-white hover:underline cursor-pointer">Customers</li>
      <li className="hover:text-white hover:underline cursor-pointer">Quotes</li>
      <li className="hover:text-white hover:underline cursor-pointer">Invoices</li>
      <li className="hover:text-white hover:underline cursor-pointer">Packages</li>
    </ul>
  </nav>
 
  );
}

export default AdminNavbar;