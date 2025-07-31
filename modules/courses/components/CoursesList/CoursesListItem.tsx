"use client";
import { useDispatch } from "react-redux";
import { removeCourse } from "@/modules/course/actions";

import styles from "./CoursesListItem.module.scss";

type Props = {
  slug: string;
};

const CoursesListItem: React.FC<Props> = ({ slug }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCourse({ slug }));
  };

  return (
    <li className={styles["courses-list-item"]}>
      {slug}
      <button onClick={handleRemove}>remove course</button>
    </li>
  );
};

export default CoursesListItem;
