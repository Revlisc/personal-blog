
import Header from './Components/Header/Header';
import './App.css';
import Home from './Pages/Home';
import PostView from './Components/PostView/PostView';
import Create from './Components/Create/Create';

function App() {
  return (
    <div className="App">
      <Header />
      <Create />
    </div>
  );
}

export default App;
