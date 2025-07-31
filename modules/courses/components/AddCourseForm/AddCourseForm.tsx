'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '@/modules/course/actions';

type Props = {};

const AddCourseForm: React.FC<Props> = () => {
  const [slug, setSlug] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (slug.trim() === '') return;

    dispatch(addCourse({ slug }));
    setSlug('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new course</h2>
      <label>
        youtube playlist id:
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
      </label>
      <button type="submit">Add course</button>
    </form>
  );
};

export default AddCourseForm;
