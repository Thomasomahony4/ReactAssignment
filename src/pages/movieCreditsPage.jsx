import React from "react";
import { useLocation } from "react-router";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieCredits";

const MovieCreditsPage = (props) => {
  let location = useLocation();
  const {movie, credits} = location.state;
  
  return (
    <PageTemplate movie={movie}>
      <MovieReview credits={credits} />
    </PageTemplate>
  );
};

export default MovieCreditsPage;
