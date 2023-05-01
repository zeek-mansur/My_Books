import { BrowserRouter, Route, Routes } from 'react-router-dom';
//styles
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './pages/About/About';
import SavedBooks from './pages/SavedBooks/SavedBooks';
// import SearchResults from './components/SearchResults';


function App() {


  return (
    <div className="App">
     
     <BrowserRouter>
     <Nav />
     <Routes>
     <Route path = '/' element = { <Header  />} /> 
      <Route path = '/about' element = {<About />} /> 
      <Route path = '/savedbooks'element ={<SavedBooks />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
