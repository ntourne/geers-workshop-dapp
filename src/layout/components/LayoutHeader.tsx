const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <img
            className="h-16 sm:h-16 md:h-20 w-auto"
            src="/geers-logo.png"
            alt=""
          />
        </div>

        <div className="lg:flex lg:flex-1 lg:justify-end">
          ** user details **
        </div>
      </nav>
    </header>
  );
};

export default Header;
