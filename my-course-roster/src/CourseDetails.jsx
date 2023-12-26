const CourseDetails = ({ selectedCourse }) => {
  return (
    <div className="details">
      {selectedCourse && (
        <>
        <h2>Credit Hour Remaining {selectedCourse.creditHour}</h2>
        <br />
          <h2>Course Details</h2>
          <p>Course Name: {selectedCourse.title}</p>
          <p>Total Credit Hours: {selectedCourse.creditHour}</p>
          <p>Total Price: ${selectedCourse.price}</p>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
