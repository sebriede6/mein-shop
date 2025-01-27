
import MenuIcon from './MenuIcon';
import SearchIcon from './SearchIcon';
import UserIcon from './UserIcon';

function Header() {
  return (
    <header className="bg-gray-800 p-4 text-white flex items-center justify-between">
      {/* Links: Menü-Icon */}
      <div className="flex items-center space-x-4">
        <MenuIcon />
      </div>

      {/* Mitte: Suchfeld */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-md border border-gray-300"
        />
        <SearchIcon />
      </div>

      {/* Rechts: Benutzer-Icon */}
      <div className="flex items-center space-x-4">
        <UserIcon />
      </div>
    </header>
  );
}

export default Header;
