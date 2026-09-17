import { Film, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-violet-400"
        : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex items-center justify-center">
            <Film size={22} className="text-violet-400"  />
          </div>

          <span className="text-lg font-bold tracking-tight">
            Movie<span className="text-violet-400">Explorer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">

          <NavLink to="/movies" className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-violet-500">
            Movies
          </NavLink>

        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-300 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-5 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4">

            <NavLink
              to="/movies"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-violet-600 px-5 py-3 text-center text-sm font-semibold"
            >
              Movies
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;