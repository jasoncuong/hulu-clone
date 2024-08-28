import React from "react";
import GenresList from "../Constant/GenresList";
import { IoIosArrowForward } from "react-icons/io";
import MovieList from "./MovieList";

const GenresMoviesList = () => {
  return (
    <div className="mt-24 p-5 px-10 md:px-20">
      {GenresList.genere.map((item: any, index) => (
        <div key={index}>
          <h2 className="text-[20px] font-bold text-white">
            {item.name}

            <span className="float-right flex cursor-pointer items-center text-[16px] font-normal text-gray-400">
              VIEW ALL <IoIosArrowForward className="ml-1 text-white" />
            </span>
          </h2>
          <MovieList genreId={item.id} />
        </div>
      ))}
    </div>
  );
};

export default GenresMoviesList;
