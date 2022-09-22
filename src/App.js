import axios from 'axios'
import { Greeting } from './components/Greeting';
import { SingleQuote } from './components/SingleQuote';
import { Time } from './components/Time';
import { Todo } from './components/Todo';
import { useEffect, useState } from 'react';
import { Weather } from './components/Weather';
import { MainPage } from './pages/MainPage';


function App() {

  const [imageUrl, setImageUrl] = useState()

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

  return (
    <div style={{backgroundImage : `url(${imageUrl})`, backgroundSize : "cover", height: "100vh", width : "100vw"}}>
      {/* <Time/>
      <SingleQuote/>
      <Greeting/>
      <Todo/>
      <Weather/> */}
      <MainPage/>
    </div>
  );
}

export default App;
