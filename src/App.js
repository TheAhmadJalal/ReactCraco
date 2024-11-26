import logo from './logo.svg';
import './App.css';
import VideoPlayer from './V';
// import vid from './assets/Stroke.mp4';
import vid from './assets/TU.mp4';

function App() {
  return (
    <div className="App" >
      <h1>xskm</h1>
      <VideoPlayer src={vid}/>
    </div>
  );
}

export default App;
