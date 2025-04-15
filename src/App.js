import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './Pages/Profile';
import Async from './Pages/Async';
import Sync from './Pages/Sync';
import MongoClient from './Pages/MongoClient';

function App() {
  return (
    <>

      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/async' element={<Async />} />
          <Route path='/sync' element={<Sync />} />
          <Route path='/mongodb' element={<MongoClient/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
