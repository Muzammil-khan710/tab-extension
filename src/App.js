import { Greeting } from './components/Greeting';
import { SingleQuote } from './components/SingleQuote';
import { Time } from './components/Time';
import { Todo } from './components/Todo';


function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Time/>
      <SingleQuote/>
      <Greeting/>
      <Todo/>
    </div>
  );
}

export default App;
