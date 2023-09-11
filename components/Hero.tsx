"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import OnePiece from "../public/img.webp";
import { Button } from "./ui/button";

function Hero() {
  const [hero, setHero] = useState();
  const [heroSrc, setHeroSrc] = useState<string | null>(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTYwYTJlODI3YzQ0NzA5MzhhZjlhZmIzNTZiYjFiMCIsInN1YiI6IjYyMWU2YjY2MDc2Y2U4MDAxYmEyNzk5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RnieYqrDnsPZZBrg6ub8A5GOu4Nhi3pl-iCPyN2_PXo",
      },
    };
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const index = Math.floor(Math.random() * response.results.length);
        const posterUrl = `https://image.tmdb.org/t/p/w500/${response.results[index].poster_path}`;
        const backdropUrl = `https://image.tmdb.org/t/p/w1280/${response.results[index].backdrop_path}`;
        setHeroSrc(backdropUrl);
        const movie = response?.results[index];
        setHero(movie);
        console.log(backdropUrl);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative">
      {/* hero image */}
      <div className="h-[90vh] flex items-center justify-center">
        {heroSrc && (
          <img
            src={heroSrc} // Replace with the path to your image
            alt="Background Image"
            className="min-w-full min-h-full object-cover"
          />
        )}
      </div>
      {/* image content */}
      {hero && (
        <div className="absolute flex flex-col gap-8 mx-12 px-6 top-2/4 w-1/4 text-white">
          <h1 className="text-4xl">{hero.title}</h1>
          <p className="break-words">{hero.overview}</p>
          <div className="flex gap-3">
            <Button variant={"primary"} size={"lg"}>
              play
            </Button>
            <Button variant={"info"} size={"lg"}>
              more info
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
