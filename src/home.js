import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import web from "./images/img1.png"
import { NavLink } from 'react-router-dom';
import Comman from './comman'

const Home = () => {
  return (
    <>
      <Comman btnText="Get Started" bodyText="Home" imgSrc={web} to="/services"/>
    </>
  )
}

export default Home;
