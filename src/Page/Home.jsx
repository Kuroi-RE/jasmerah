import "./home.css";
import Hero from "../components/Hero";
// import { biografis } from "../database/index";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div className="home h-[100dvh] flex justify-center items-center">
      <Box>
        <Hero />
      </Box>
    </div>
  );
};

export default Home;
