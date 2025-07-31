"use client";
import { useSelector } from "react-redux";
import CoursesListItem from "./CoursesListItem";

const CoursesList: React.FC = () => {
  const courses = useSelector((state: any) => state.coursesPage.courses);

  return (
    <ul>
      {courses.map((course) => (
        <CoursesListItem key={course.slug} slug={course.slug} />
      ))}
    </ul>
  );
};

export default CoursesList;
