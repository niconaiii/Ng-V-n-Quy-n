function Header() {
  return (
    <nav className="my-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="flex items-center justify-start space-x-10 text-2xl">
        <li>
          <a className="font-bold text-blue-600 hover:underline" href="#">
            Trang Chủ
          </a>
        </li>
        <li>
          <a className="font-semibold text-gray-700 hover:underline" href="#">
            Các Tours Du Lịch
          </a>
        </li>
        <li>
          <a className="font-semibold text-gray-700 hover:underline" href="#">
            Các Điểm Đến
          </a>
        </li>
        <li>
          <a className="font-semibold text-gray-700 hover:underline" href="#">
            Đặt Tour
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
