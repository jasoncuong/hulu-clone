import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const MovieList = (genreId: any) => {
  const elementRef = useRef(null);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieListByGenreId();
  }, []);

  const getMovieListByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId.genreId).then((res: any) => {
      setMovieList(res.data.results);
    });
  };

  const slideRight = (element: any) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element: any) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="flex items-center">
      <IoIosArrowBack
        onClick={() => slideLeft(elementRef.current)}
        className="z-10 mb-[120px] cursor-pointer rounded-full bg-black p-2 text-[40px] text-white"
      />

      <div
        ref={elementRef}
        className="scrollbar-hide mb-16 ml-[-10px] mr-[-10px] w-full overflow-scroll overflow-x-auto scroll-smooth whitespace-nowrap"
      >
        {movieList.map((item: any, index: any) => (
          <MovieCard key={index} movie={item} />
        ))}
      </div>
      <IoIosArrowForward
        onClick={() => slideRight(elementRef.current)}
        className="mb-[120px] cursor-pointer rounded-full bg-black p-2 text-[40px] text-white"
      />
    </div>
  );
};

export default MovieList;
