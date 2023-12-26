import React from 'react';

const Course = ({ course, onSelect }) => {
  const handleSelect = () => {
    onSelect(course);
  };

  return (
    <div  className="card ">
      <div id='courseContent' className="content shadow-2xl">
      <img id='img' className='w-full ' src={course.img} alt="Course Image" />
        <h3 className='mt-4 mb-4'>{course.title}</h3>
        <p className='text-sm mb-8'>{course.description}</p>
        <p>Price: ${course.price}</p>
        <p>Credit Hour: {course.creditHour}</p>
        <button className='mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 py-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
</button>' onClick={handleSelect}>Select</button>
      </div>
    </div>
  );
};

export default Course;
