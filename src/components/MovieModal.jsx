import { Calendar, Globe, Star, Tv, X } from "lucide-react";
import { useEffect } from "react";

const MovieModal = ({ show, onClose }) => {
  useEffect(() => {
    if (!show) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [show, onClose]);

  if (!show) return null;

  const image =
    show.image?.original ||
    show.image?.medium ||
    "/video-load-placeholder";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-white/20"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-[280px_1fr]">
          <div className="relative min-h-360px md:min-h-full">
            <img
              src={image}
              alt={show.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/video-load-placeholder";
              }}
            />

            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent md:bg-linear-to-r" />
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {show.genres?.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
                >
                  {genre}
                </span>
              ))}
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              {show.name}
            </h2>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Star
                  size={17}
                  className="fill-yellow-400 text-yellow-400"
                />
                <strong className="text-white">
                  {show.rating?.average || "N/A"}
                </strong>
              </span>

              <span className="inline-flex items-center gap-1.5">
                <Calendar size={17} />
                {show.premiered || "N/A"}
              </span>

              {show.runtime && (
                <span>
                  {show.runtime} min
                </span>
              )}
            </div>

            <div className="my-7 h-px bg-white/10" />

            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">
                Overview
              </h3>

              <div
                className="text-sm leading-7 text-slate-300"
                dangerouslySetInnerHTML={{
                  __html:
                    show.summary ||
                    "<p>No summary available for this show.</p>",
                }}
              />
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {show.network?.name && (
                <div className="rounded-xl border border-white/10 bg-white/0.03 p-4">
                  <div className="mb-1 flex items-center gap-2 text-xs text-slate-500">
                    <Tv size={14} />
                    Network
                  </div>
                  <p className="font-semibold">
                    {show.network.name}
                  </p>
                </div>
              )}

              {show.country?.name && (
                <div className="rounded-xl border border-white/10 bg-white/0.03 p-4">
                  <div className="mb-1 flex items-center gap-2 text-xs text-slate-500">
                    <Globe size={14} />
                    Country
                  </div>
                  <p className="font-semibold">
                    {show.country.name}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-7 flex justify-end">
              <button
                onClick={onClose}
                className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;