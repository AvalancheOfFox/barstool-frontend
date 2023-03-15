import logo from './logo.svg';
import './App.css';
import MLBBoxScore from './components/MLBBoxScore';
import NBABoxScore from './components/NBABoxScore'

function App() {
  return (
    <main className="App">
        <h1> Box Scores </h1>
        <MLBBoxScore />
        <NBABoxScore />
    </main>
  );
}

export default App;
