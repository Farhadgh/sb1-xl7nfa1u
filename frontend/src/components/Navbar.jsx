import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 space-x-reverse">
            <Link to="/" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
              صفحه اصلی
            </Link>
            <Link to="/tasks" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
              تسک‌ها
            </Link>
            <Link to="/leaderboard" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
              برترین‌ها
            </Link>
            <Link to="/profile" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
              پروفایل
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar