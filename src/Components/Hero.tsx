import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movieList, setMovieList] = useState<any>([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const random = Math.floor(Math.random() * 19);

  console.log(random);

  const getPopularMovies = () => {
    GlobalApi.getPopularMovies.then((res: any) => {
      const result = res.data.results;
      setMovieList(result[random]);
    });
  };
  return (
    <div>
      <div className="absolute h-[100vh] w-full bg-gradient-to-t from-[#1e2126] via-transparent to-transparent"></div>
      <div className="absolute mt-[400px] px-10 md:mt-[350px] md:px-24">
        <h2 className="text-[19px] text-white lg:text-[27px]">
          Watch movies on HULU
        </h2>
        <h2 className="text-[36px] font-bold text-white lg:text-[47px]">
          {movieList.original_title}
        </h2>
        <div className="mt-5 flex gap-5">
          <button className="flex items-center gap-2 rounded-md bg-white px-4 py-2 font-bold text-black hover:opacity-80">
            <FaPlay className="w-[16px]" />
            PLAY
          </button>
          <button className="cursor-pointer rounded-md border-2 border-white bg-transparent px-4 py-2 font-bold text-white hover:border-gray-500">
            DETAILS
          </button>
        </div>
      </div>
      <img
        src={`${IMAGE_BASE_URL}${movieList.backdrop_path}`}
        width={1920}
        height={1080}
        className="h-[100vh] object-cover"
      />
    </div>
  );
};

export default Hero;
