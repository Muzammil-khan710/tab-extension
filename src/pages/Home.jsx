import React from "react";
import { MainPage } from "./MainPage";
import { WelcomePage } from "./WelcomePage";

const Home = ({imageUrl, name}) => {
  return (
    <main
      style={
        imageUrl && {
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }
      }
    >
      {name ? <MainPage /> : <WelcomePage />}
    </main>
  );
};

export default Home;
