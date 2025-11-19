function Header() {
  return (
    <nav className="my-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="flex items-center justify-start space-x-10 text-2xl">
        <li>
          <a className="font-bold text-blue-600" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="font-semibold text-gray-700" href="#">
            Tours
          </a>
        </li>
        <li>
          <a className="font-semibold text-gray-700" href="#">
            Destinations
          </a>
        </li>
        <li>
          <a className="font-semibold text-gray-700" href="#">
            Bookings
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
