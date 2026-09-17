import { Search, X } from "lucide-react";

const SearchBar = ({ value, onChange, onClear }) => {
  return (
    <div className="relative">
      <Search
        size={21}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie..."
        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-14 pr-14 text-sm text-white outline-none backdrop-blur-xl placeholder:text-slate-500 transition focus:border-violet-500/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-violet-500/10"
      />

      {value && (
        <button
          onClick={onClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 transition hover:bg-white/10 hover:text-white"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;