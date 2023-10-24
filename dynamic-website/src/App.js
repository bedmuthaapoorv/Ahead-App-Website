import './stylessheets/App.css'
import NavBar from './NavBar';
import Board from './Board';
import LandingPage from './LandingPage';
import Description from './Description';
import EmotionCarousal from './EmotionCarousal';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Board comp={<LandingPage />}></Board>
      <Description></Description>
      <EmotionCarousal></EmotionCarousal>
    </div>
  );
}

export default App;
