import { Calendar, Info, Star } from "lucide-react";

const MovieCard = ({ show, onDetails }) => {
  const image =
    show.image?.original ||
    show.image?.medium ||
    "/video-load-placeholder";

  const year = show.premiered
    ? new Date(show.premiered).getFullYear()
    : "N/A";

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/0.04 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-violet-950/30">
      <div className="relative aspect-2/3 overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={show.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "/video-load-placeholder";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-tell from-slate-950 via-transparent to-transparent opacity-80" />

        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2.5 py-1.5 text-xs font-semibold backdrop-blur">
          <Star size={13} className="fill-yellow-400 text-yellow-400" />
          {show.rating?.average || "N/A"}
        </div>

        {show.genres?.[0] && (
          <span className="absolute bottom-3 left-3 rounded-full bg-violet-600/90 px-2.5 py-1 text-xs font-medium">
            {show.genres[0]}
          </span>
        )}
      </div>

      <div className="p-4">
        <h3
          className="truncate font-bold text-white"
          title={show.name}
        >
          {show.name}
        </h3>

        <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            {year}
          </span>

          {show.genres?.length > 0 && (
            <span className="truncate">
              {show.genres.slice(0, 2).join(" • ")}
            </span>
          )}
        </div>

        <button
          onClick={() => onDetails(show)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-violet-500/30 hover:bg-violet-600 hover:text-white"
        >
          <Info size={16} />
          See Details
        </button>
      </div>
    </article>
  );
};

export default MovieCard;