import './App.css';
import CardWrap from './cardWrap'
import Sdata from './sData'


const Service = () => {
  return(
    <>
        <div className="my-5">
                <h1 className="text-center">Out Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                           
                        {
                            Sdata.map((val , index) => {
                                return <CardWrap
                                    key={index}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                />

                            })
                        }

                            </div>
                        </div>

                    </div>

                </div>
    </>
  )
}

export default Service;
