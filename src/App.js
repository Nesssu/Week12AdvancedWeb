import './App.css';
import MyContainer from './components/MyContainer';
import Header from './components/Header';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route path='/' element={<MyContainer/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
