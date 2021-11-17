import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div id="contact" className='container py-3'>
            <h1> <small>Get in touch </small> <br />Watch with Us</h1>
            <p>Come and visit our quarters or simply send us an email anytime you want. We are open to all suggestions from our audience.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
    <i className="fas fa-address-card size-of-icon"></i>
      <div className="card-body">
        <h5 className="card-title">ADDRESS</h5>
        <p className="card-text">
 AK Tower <br />
bangladesh, bogura, Sherpur</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <i className="fas fa-mobile-alt size-of-icon"></i>
      <div className="card-body">
        <h5 className="card-title">CALL US</h5>
        <p className="card-text">
+8801301769047 <br />
+8801301769047</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <i className="far fa-envelope size-of-icon"></i>
      <div className="card-body">
        <h5 className="card-title">WRITE TO US</h5>
        <p className="card-text">
office@watch.com <br />
watch@boss.com</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <i className="fas fa-hand-holding-heart size-of-icon"></i>
      <div className="card-body">
        <h5 className="card-title">Purchase watch</h5>
        <p className="card-text">
Click here to buy<a href="#products"> watch</a>  .</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;