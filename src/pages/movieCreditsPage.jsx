import React from "react";
import { useParams } from 'react-router';
import MovieCredits from "../components/movieCredits/";
import PageTemplate from "../components/templateMoviePage";
import { getMovieCredits } from '../api/tmdb-api'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner'


const MovieCreditsPage = (props) => {
  const { id } = useParams();

  const { data: credits, error, isPending, isError } = useQuery({
  queryKey: ["credits", { id }],
  queryFn: getMovieCredits,
});

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {credits ? (
        <>
          <PageTemplate credits={credits}>
            <MovieCredits credits={credits} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie credits</p>
      )}
    </>
  );
};

export default MovieCreditsPage;