function Header() {
  return (
    <nav className="my-5">
      <ul className="flex items-center justify-around font-semibold">
        <li>
          <a className="px-5 font-bold" href="#">
            🏠 Home
          </a>
        </li>
        <li>
          <a className="px-5 font-bold" href="#">
            📋 Tours
          </a>
        </li>
        <li>
          <a className="px-5 font-bold" href="#">
            🗺️ Destinations
          </a>
        </li>
        <li>
          <a className="px-5 font-bold" href="#">
            🎫 Bookings
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
