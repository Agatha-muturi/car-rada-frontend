
import './App.css';
import Updateform from './components/updateform';
import Updatelist from './components/updatelist';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Footer from './components/footer';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [reFreshKey, setReFreshKey]= useState(0);

 const handleUpdateAdded = () => {
    // re-fetch updates when new one is added
    setReFreshKey((prev) => prev + 1);
  };
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Landing/>
      <Routes>
        <Route path="/update" element={<Updateform onUpdateAdded={handleUpdateAdded}/>} />
      </Routes>
      <Updatelist updates={reFreshKey}/>
      </Router>
      <Footer/>
    </div>
  );
};
export default App;
