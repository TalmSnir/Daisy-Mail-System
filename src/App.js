import './App.css';
import Packages from './components/Packages';
import useFetch from './hooks/useFetch';
import { data } from './data/data';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import UserPackages from './components/UserPackages';
import Header from './components/Header';
import UserPackagesOnly from './components/UserPackagesOnly';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPackages } from './reducers/packagesReducer';

function App() {
  const dispatch = useDispatch(setAllPackages);
  const { data } = useFetch('daisy-api-sim');

  useEffect(() => {
    data && dispatch(setAllPackages(data.result.packages));
  }, [data]);

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/all-packages' element={<Packages />} />
        <Route path='/packages-by-user' element={<UserPackages />} />
        <Route path='/packages-by-user/:name' element={<UserPackagesOnly />} />
      </Routes>
    </div>
  );
}

export default App;
