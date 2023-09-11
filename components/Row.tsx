"use client";
import React, { useEffect, useState } from "react";

function Row() {
  const [item, setItem] = useState();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTYwYTJlODI3YzQ0NzA5MzhhZjlhZmIzNTZiYjFiMCIsInN1YiI6IjYyMWU2YjY2MDc2Y2U4MDAxYmEyNzk5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RnieYqrDnsPZZBrg6ub8A5GOu4Nhi3pl-iCPyN2_PXo",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const index = Math.floor(Math.random() * response.results.length);
        setItem(response?.results[index]);
        console.log(index);
        console.log(response.results[index]);
      })
      .catch((err) => console.error(err));
  }, []);

  return <div className="h-10 bg-black w-full text-white"> ss</div>;
}

export default Row;
