import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { Box, Container, Typography } from "@mui/material";
import Projects from "../components/Projects";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <Box
      sx={{ backgroundImage: "linear-gradient(to bottom, #373b44, #4286f4)" }}
      height={"100%"}
    >
      <Navbar />
      <Main />

      <Projects />
    </Box>
  );
}
