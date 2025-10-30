import React, { useState } from "react";
import Chip from "@mui/material/Chip"; // MUI Chip component for small info labels
import Paper from "@mui/material/Paper"; // Paper container for grouping Chips
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Icon for runtime
import MonetizationIcon from "@mui/icons-material/MonetizationOn"; // Icon for revenue
import StarRate from "@mui/icons-material/StarRate"; // Icon for ratings
import NavigationIcon from "@mui/icons-material/Navigation"; // Icon for FAB button
import Fab from "@mui/material/Fab"; // Floating Action Button
import Typography from "@mui/material/Typography"; // Text component
import Drawer from "@mui/material/Drawer"; // Slide-in panel
import MovieReviews from "../movieReviews" // Component to show movie reviews


const root = {
  display: "flex",           // Flex layout for chips
  justifyContent: "center",  // Center align chips
  flexWrap: "wrap",          // Wrap to next line if needed
  listStyle: "none",         // Remove default list styling
  padding: 1.5,              // Inner spacing
  margin: 0,                 // Remove default margin
};

const chip = { margin: 0.5 }; // Spacing between individual chips

const MovieDetails = ({ movie }) => {  // Component receives movie object as prop
  const [drawerOpen, setDrawerOpen] = useState(false); // State to toggle Drawer

  return (
    <>
      {/* Overview section */}
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview} {/* Display movie overview text */}
      </Typography>

      {/* Genres section */}
      <Paper
        component="ul"
        sx={{ ...root }}
      >
        <li>
          <Chip label="Genres" sx={{ ...chip }} color="primary" /> {/* Static label */}
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} /> {/* Render each genre */}
          </li>
        ))}
      </Paper>

      {/* Movie stats section */}
      <Paper component="ul" sx={{ ...root }}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} /> {/* Runtime */}
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`} /* Revenue formatted with commas */
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`} {/* Average rating and vote count */}
        />
        <Chip label={`Released: ${movie.release_date}`} /> {/* Release date */}
      </Paper>

      {/* Floating Action Button to open reviews */}
      <Fab
        color="primary"
        variant="extended"
        onClick={() => setDrawerOpen(true)} // Opens the Drawer
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon /> {/* Icon inside FAB */}
        Reviews {/* Label */}
      </Fab>

      {/* Drawer showing reviews */}
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} /> {/* Pass movie to reviews component */}
      </Drawer>
    </>
  );
};

export default MovieDetails;