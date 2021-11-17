import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div id="home">
            <Carousel variant="dark">
  <Carousel.Item>
    <img height='600' className="d-block w-100" src="https://i.ibb.co/wQtjkN9/1000-F-300904271-a6-KAos-QJNL2-Td1pakal-Az-BBe-V8-IWl-LDC.jpg" alt="First slide"/>
    <Carousel.Caption>
      <h5 className="color-white">A watch is a portable timepiece intended to be carried or worn by a person  </h5>
      <p className="color-white">During most of its history the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel. These are called mechanical watches</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height='600' className="d-block w-100 h-80" src="https://i.ibb.co/HtfBZd6/1000-F-237940748-QSHLSy-SBQSr1-U2k-XBqn88-C7r-Y5r-ERe-Ri.jpg"
      alt="Second slide"/>
    <Carousel.Caption>
      <h5 className="color-white">It is a time measuring machine</h5>
      <p className="color-white">A wristwatch is worn around the wrist, most of the left hand. It is a time measuring machine.Some of the watches have a third hand too. It is a long thin hand indicating seconds a watch may be wound or the automatic one</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;