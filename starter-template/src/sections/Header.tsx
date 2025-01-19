export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed z-10 w-full top-3">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          className="nav-item"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="nav-item"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projects
        </a>
        <a
          className="nav-item"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <a
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
