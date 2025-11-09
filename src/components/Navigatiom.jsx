const Navigation = () => {
  return (
    <nav className="container flex items-center justify-between p-2 bg-white shadow-md max-w-screen-xl mx-auto px-4">
      <div className="logo w-36 h-36">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className="flex gap-8 text-lg font-poppins">
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
        Login
      </button>
    </nav>
  );
};

export default Navigation;
