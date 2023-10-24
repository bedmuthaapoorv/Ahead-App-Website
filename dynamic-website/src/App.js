import './stylessheets/App.css'
import NavBar from './NavBar';
import Board from './Board';
import LandingPage from './LandingPage';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Board comp={<LandingPage />}></Board>
    </div>
  );
}

export default App;
