import './stylessheets/App.css'
import NavBar from './NavBar';
import Board from './Board';
import LandingPage from './LandingPage';
import Description from './Description';
import EmotionCarousal from './EmotionCarousal';
import AboutApp from './AboutApp';
import MotivationPage from './MotivationPage';
import AppIntroduction from './AppIntroduction';
import TakeTest from './TakeTest';

function App() {
  const title=[
    'EQ beats IQ', 
    'Be the best you with EQ'
  ]
  const desc1=[
    'People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships',
    'Not having your own emotions under control might be holding you back'
  ]
  const desc2=[
    'They are more successful in their pursuits and make for inspiring leaders.According to science, they earn $29k a year.',
    'Additionally, not understanding those of others stops you from being the best parent, friend you can be'
  ]
  return (
    <div className="App">
      <NavBar></NavBar>
      <Board comp={<LandingPage />}></Board>
      <Description title={title[0]} desc1={desc1[0]} desc2={desc2[0]}></Description>
      <EmotionCarousal></EmotionCarousal>
      <Board comp={<AboutApp />}></Board>
      <Board comp={<MotivationPage />}></Board>
      <Description title={title[1]} desc1={desc1[1]} desc2={desc2[1]}></Description>
      <Board comp={<AppIntroduction />}></Board>
      <Board comp={<TakeTest />}></Board>
    </div>
  );
}

export default App;
