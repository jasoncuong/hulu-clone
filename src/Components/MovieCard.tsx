const MovieCard = (movie: any) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group m-2 inline-block cursor-pointer md:m-3">
      <img
        src={`${IMAGE_BASE_URL}${movie.movie.backdrop_path}`}
        className="w-[230px] rounded-2xl border-[5px] border-transparent object-cover transition-all duration-300 ease-in hover:border-gray-400 group-hover:border-[5px] md:w-[340px]"
      />
      <h2 className="mt-2 text-[12px] font-bold text-gray-400 group-hover:font-bold md:text-[17px]">
        {movie.movie.id % 2 == 0 ? "WATCH MOVIE" : "START WATCHING"}
      </h2>
      <h2 className="mt-1 max-w-[340px] overflow-hidden text-white transition-all group-hover:font-bold md:text-[22px]">
        {movie.movie.original_title}
      </h2>
    </div>
  );
};

export default MovieCard;
