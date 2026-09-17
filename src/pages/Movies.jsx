import { Film, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

import {
  getShows,
  searchShows,
} from "../services/tvmazeApi";

const Movies = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchTimer = useRef(null);

  const fetchAllShows = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getShows();
      setShows(data);
    } catch (err) {
      setError(err.message || "Unable to load shows.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllShows();

    return () => {
      clearTimeout(searchTimer.current);
    };
  }, [fetchAllShows]);

  const handleSearch = (value) => {
    setQuery(value);

    clearTimeout(searchTimer.current);

    if (!value.trim()) {
      fetchAllShows();
      return;
    }

    searchTimer.current = setTimeout(async () => {
      setLoading(true);
      setError("");

      try {
        const data = await searchShows(value.trim());
        setShows(data);
      } catch (err) {
        setError(err.message || "Search failed.");
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  const clearSearch = () => {
    setQuery("");
    fetchAllShows();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <section className="border-b border-white/5 bg-linear-to-b from-violet-950/20 to-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              
              <h1 className="text-xl font-black tracking-tight sm:text-3xl">
                Search Shows
              </h1>
            </div>

            <div className="mt-8 max-w-3xl">
              <SearchBar
                value={query}
                onChange={handleSearch}
                onClear={clearSearch}
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-7 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Film size={20} className="text-violet-400" />

                <h2 className="text-xl font-bold">
                  {query ? `Search results for "${query}"` : "All Shows"}
                </h2>
              </div>

              {!loading && !error && (
                <p className="mt-1 text-sm text-slate-500">
                  {shows.length} shows found
                </p>
              )}
            </div>
          </div>

          {loading && <Loading />}

          {!loading && error && (
            <ErrorMessage
              message={error}
              onRetry={query ? () => handleSearch(query) : fetchAllShows}
            />
          )}

          {!loading && !error && shows.length === 0 && (
            <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/0.03 text-center">
              <div className="text-5xl">🔍</div>

              <h3 className="mt-4 text-xl font-bold">
                No shows found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try searching with another title.
              </p>
            </div>
          )}

          {!loading && !error && shows.length > 0 && (
            <MovieGrid
              shows={shows}
              onDetails={setSelectedShow}
            />
          )}
        </section>
      </main>

      <Footer />

      <MovieModal
        show={selectedShow}
        onClose={() => setSelectedShow(null)}
      />
    </div>
  );
};

export default Movies;