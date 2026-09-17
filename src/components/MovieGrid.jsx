import MovieCard from "./MovieCard";

const MovieGrid = ({ shows, onDetails }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {shows.map((show) => (
        <MovieCard
          key={show.id}
          show={show}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
};

export default MovieGrid;