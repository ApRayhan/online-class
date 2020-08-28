import React from 'react';
import './Course.css'

const Course = (props) => {
  const {name, price, img} = props.course;

  return (
    <div className="course container">
        
        <div className="single-course">
        <div>
          <img className="img-thumbnail rounded" src={ img } alt=""/>
        </div>
        <div>
          <p><strong>Name : </strong>{ name }</p>
          <p><strong>price : </strong>$ { price }</p>
          <button onClick={() => props.eventHandlers(props.course)} className="btn btn-primary">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default Course;