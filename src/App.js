import './index.css';
import Movielist from './pages/movielist/movielist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from '../src/context/moviecontext'
import Moviedetail from './pages/moviedetail/moviedetail';

function App() {
  return (
    <main className='wrapper'>
      <MovieProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Movielist />} />
            <Route path='/:id' element={<Moviedetail />} />
          </Routes>
        </Router>
      </MovieProvider>  
    </main>
  );
}

export default App;
