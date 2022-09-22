import axios from 'axios'
import { useEffect, useState } from 'react';
import { useGlobal } from './context/GlobalContext';
import { MainPage } from './pages/MainPage';
import { WelcomePage } from './pages/WelcomePage';


function App() {

  const [imageUrl, setImageUrl] = useState()

  const { name, setName } = useGlobal()

  const unsplashUrl = async () => {
    try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/randm/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&&orientation=landscape&&query=nature%20dark`
    )
      setImageUrl(response.data.urls.regular)
    console.log('res',response)
    } catch(err) {
      console.log('err',err)
    }
  }

  useEffect(() => {
    unsplashUrl()
  }, [])

  useEffect(() => {
    setName(localStorage.getItem("username"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{backgroundImage : `url(${imageUrl})`, backgroundSize : "cover", height: "100vh", width : "100vw"}}>
      { name ?  <MainPage/> : <WelcomePage/> }
    </div>
  );
}

export default App;
