import './stylessheets/App.css'
import NavBar from './NavBar';
import Board from './Board';
import LandingPage from './LandingPage';
import Description from './Description';
import EmotionCarousal from './EmotionCarousal';
import AppIntroduction from './AppIntroduction';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Board comp={<LandingPage />}></Board>
      <Description></Description>
      <EmotionCarousal></EmotionCarousal>
      <Board comp={<AppIntroduction />}></Board>
    </div>
  );
}

export default App;
