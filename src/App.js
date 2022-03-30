import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
