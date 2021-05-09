import './App.css';
import {NavLink} from 'react-router-dom';
import web from "./images/img1.png"

const Comman = (props) => {
  return(
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>Welcome to {props.bodyText} Page <strong className="brand-name">ProTech</strong></h1>
                  <h2 className="my-3"> we are the team of talnted developer making websites </h2>
                  <div className="mt-3">
                    <NavLink to={props.to} className="btn-get-started" >{props.btnText}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgSrc} className="img-fluid animated" alt="home img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Comman;
