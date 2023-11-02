import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobal } from "./context/GlobalContext";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const [imageUrl, setImageUrl] = useState();

  const { name, setName, setMainFocus } = useGlobal();
  const unsplashUrl = async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&&orientation=landscape&&query=nature%20dark`
      );
      setImageUrl(data.urls.regular);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    unsplashUrl();
  }, []);

  useEffect(() => {
    setName(localStorage.getItem("username"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMainFocus(localStorage.getItem("focus"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home name={name} imageUrl={imageUrl}/>
        }
      />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
    </Routes>
  );
}

export default App;
