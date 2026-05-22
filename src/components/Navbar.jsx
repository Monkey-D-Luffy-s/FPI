import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Nexus
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Home</Link>
            <Link to="/about" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
