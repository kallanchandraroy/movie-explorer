import { Film, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <Film size={20} className="text-violet-400" />

          <span className="font-semibold">
            Movie<span className="text-violet-400">Explorer</span>
          </span>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} MovieExplorer. All rights reserved.
        </p>

        <a
          href="https://github.com/kallanchandraroy/movie-explorer"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          GitHub
        </a>
      </div>

    </footer>
  );
};

export default Footer;