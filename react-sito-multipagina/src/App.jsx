import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Home from './assets/components/Home';
import Blog from './assets/components/Blog';
import Article from './assets/components/Article';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {

  return (
    <>
      <BrowserRouter>
     <Header/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path='/blog/:id' element={<Article/>}></Route>
      </Routes>
      
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
