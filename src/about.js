import './App.css';
import {NavLink} from 'react-router-dom';
import about from "./images/about.jpg"
import Comman from './comman'

const About = () => {
  return(
    <>
    <Comman btnText="Contact Us" bodyText="About" imgSrc={about} to="/contact"/>
    </>
  )
}

export default About;
