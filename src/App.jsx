import './App.css';
import Hero from './components/UI/hero/Hero';
import Navbar from './components/UI/navbar/Navbar';
import TracksGrid from './components/UI/paths/TracksGrid';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TracksGrid />
    </>
  );
}

export default App;
