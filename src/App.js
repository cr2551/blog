import './App.css';
import {Home} from './pages/Home';
import {Routes, Route, Link} from 'react-router-dom';
import {NavBar} from './components/NavBar';
import {Footer} from './components/Footer';
import { Article } from './pages/ArticlePage';

function App() {
  return (
    <div className='app'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/article' element={<Article></Article>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
