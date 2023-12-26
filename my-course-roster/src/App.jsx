import React, { useState } from 'react';
import Course from './Course';
import CourseDetails from './CourseDetails';
import jsonData from './data/courses.json';

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleSelect = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="flex">
      <div id='courseList ' className="Course-container flex-1 w-1/1 grid md:grid-cols-4 sm:grid-cols-2 font-bold gap-5 box-border border-4 ">
        {jsonData.map((course, index) => (
          <Course key={index} course={course} onSelect={handleSelect} />
        ))}
      </div>
      <div className=' bg-gray-200 font-bold rounded p-4 ml-4 box-border'>
      <CourseDetails selectedCourse={selectedCourse} />
      </div>
    </div>
  );
};

export default App;
