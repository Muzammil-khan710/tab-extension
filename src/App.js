import { Greeting } from './components/Greeting';
import { SingleQuote } from './components/SingleQuote';
import { Time } from './components/Time';


function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Time/>
      <SingleQuote/>
      <Greeting/>
    </div>
  );
}

export default App;
