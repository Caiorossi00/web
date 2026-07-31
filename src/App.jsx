import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/shared/navbar/Navbar';
import Home from './components/UI/Home';
import Path from './components/UI/Path';
import PathHome from './components/UI/Path/PathHome';
import Topic from './components/UI/Topic/';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/paths/:pathSlug" element={<Path />}>
          <Route index element={<PathHome />} />

          <Route path=":topicSlug" element={<Topic />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
