
import './App.css';
import Header from '../component/Header/header';
import MobFooter from '../component/Footer/mobFooter';
import Footer from '../component/Footer/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
    <Header />
    <Outlet />
    <MobFooter />
    <Footer />
    </>
  );
}

export default App;
