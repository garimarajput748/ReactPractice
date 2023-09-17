import './App.css';
import State from './component/State';
import Carousal from './component/Carousal';
import Faq from './component/Faq';
import APIData from './component/Effect';
import UseEffectAPI from './component/effectApi/AsyncAwaitApi';

function App() {
  return (
    <div className="App">
      {/* <State /> */}
      {/* <Carousal /> */}
      {/* <Faq/> */}
      <APIData/>
      {/* <UseEffectAPI/> */}
    </div>
  );
}

export default App;
