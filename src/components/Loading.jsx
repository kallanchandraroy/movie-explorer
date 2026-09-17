const Loading = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        >
          <div className="aspect-2/3 animate-pulse bg-white/10" />

          <div className="space-y-3 p-4">
            <div className="h-5 w-3/4 animate-pulse rounded bg-white/10" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-white/10" />
            <div className="h-10 w-full animate-pulse rounded-xl bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;