import axios from 'axios'
import { Greeting } from './components/Greeting';
import { SingleQuote } from './components/SingleQuote';
import { Time } from './components/Time';
import { Todo } from './components/Todo';
import { useEffect, useState } from 'react';


function App() {

  const [imageUrl, setImageUrl] = useState()

  const unsplashUrl = async () => {
    try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&&orientation=landscape&&query=travel%20dark`
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
      <h1>Hello world</h1>
      <Time/>
      <SingleQuote/>
      <Greeting/>
      <Todo/>
    </div>
  );
}

export default App;
