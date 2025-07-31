import { REMOVE_COURSE } from './actions';

const initialState = {
    courses: [
      { slug: 'java' },
      { slug: 'free-code-camp' },
      { slug: 'ten-days-of-javascript' }
    ]
  };
  
  function coursesReducer(state = initialState, action) {
    switch (action.type) {
      case REMOVE_COURSE:
        return {
          ...state,
          courses: state.courses.filter(course => course.slug !== action.payload.slug)
        };
      default:
        return state;
    }
  }
  
  export default coursesReducer;
  