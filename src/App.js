import React from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './components/Course/Course';
import fakeData from './fakeData'
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  const allCourses = fakeData;
  
  const [courses, setCourses] = useState(allCourses);
  const [courseCount, setCourseCount] = useState([]);

  const eventHandlers = (course) => {
    const newCourseCount = [...courseCount, course];
    setCourseCount(newCourseCount);
  }

  let totalPrice = 0;

  for (let i = 0; i < courseCount.length; i++) {
    const coursePrice = courseCount[i];
    totalPrice += coursePrice.price;
  }
  
  return (
    <div className="App">
      <h3>Total Added { courseCount.length } Course</h3>
      <h4>Total Price : $ { totalPrice }</h4>
      {
        courses.map(course => <Course eventHandlers={eventHandlers} course={ course }></Course>)
      }
    </div>
  );
}

export default App;
