import './App.css';
import { useState } from 'react'

const Contact = () => {
  const [text, setText] = useState({
    fname: "",
    lname: "",
    pnumber: "",
    email: "",
    textarea: ""
  })
  const InputEvent = (e) => {
    const value = e.target.value;
    const names = e.target.name;
    setText((prev) => {
      return {
        ...prev,
        [names]: value
      };

    });
  };
  const FormSubmit = (event) => {
    // event.preventDefault();
    alert(` Name : ${text.fname} ${text.lname} Phone : ${text.pnumber} Email : ${text.email} message : ${text.textarea} `)
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={FormSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">First Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" value={text.fname} onChange={InputEvent} placeholder="Enter Your First Name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" name="lname" value={text.lname} onChange={InputEvent} placeholder="Enter Your Last Name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput3" name="pnumber" value={text.pnumber} onChange={InputEvent} placeholder="Enyer Your Mobile Number" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput4" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput4" name="email" value={text.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea5" className="form-label" name="textarea" value={text.textarea} onChange={InputEvent}>Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
